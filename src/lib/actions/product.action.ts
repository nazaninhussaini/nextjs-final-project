"use server";
import { getTranslations } from "next-intl/server";
import {z} from "zod";
import { supabase } from "@/db/db.config";
import { error } from "console";
const ImageFormat = ["PNG , JPG , JPEG , GIF , webp"]
export async function addProduct(prevState : any , formData : FormData){
    const t = await getTranslations("dashboard.addProduct.errors");
    const validationSechma = z.object({
        name: z.string().min(3, t("name")),
        price : z.coerce.number().positive(t("price")),
        size : z.string(t("size")),
        type : z.string(),
        color : z.array(z.string()).min(1,t("color")),
        brand :z.string().min(3,t("brand")),
        qty: z.coerce.number().positive(t("qty")),
        alert_qty: z.coerce.number().positive(t("alert_qty")),
        front_image : z.instanceof(File,{message : ""})
        .refine(
          (file)=> ImageFormat.includes(file.type),
        t("image_type")
        ),
        back_image : z.instanceof(File,{message : t("front_image")})
        .refine(
          (file)=> ImageFormat.includes(file.type),
        t("image_type")
        ),
        description : z.string().min(10), 
        man_date : z.date().nullable(),
        exp_date : z.date().nullable(),
     }).refine((value)=>value.man_date && value.exp_date ? value.man_date< value.exp_date : true,
      "Man date should be smaller then exp date")

//    const dateValidate   =  z.object({
//         mandate : z.date(),
//         expdate : z.date(),
//      }).refine((value)=> value.mandate < value.expdate, "Man date should be smaller then exp date");

//     const final = validationSechma.and(dateValidate;
    const formInfo = validationSechma.safeParse({
        name : formData.get("name"),
        price : Number(formData.get("price")),
        color :formData.getAll("color"),
        size : formData.get("size"),
        brand  : formData.get("brand"),
        qty  : formData.get("qty"),
        alert_qty  : formData.get("alert_qty"),
        man_date : formData.get("man_date"),
        exp_date  : formData.get("exp_date"),
        description : formData.get("description"),
        // front_image : formData.get("front_image") as File,
        // back_image : formData.get("back_image") as File,
        type : formData.get("type")
    })

    if(!formInfo.success){
        return {
            status : false,
            message: "validation Error",
            error:formInfo.error.flatten().fieldErrors,
        }
     
      }else{
        const frontImagePath =  `${crypto.randomUUID} - ${formInfo.data.front_image.name}`;
        const backImagePath =  `${crypto.randomUUID} - ${formInfo.data.back_image.name}`;

       const {data:frontURL , error: frontError} = await supabase.storage.from("products").upload(frontImagePath,formInfo.data.front_image);

       const {data:backURL, error:BackError}= await supabase.storage.from("products").upload(backImagePath, formInfo.data.back_image);

       if(!frontError && !BackError){
        const frontImageURL = await supabase.storage.from("products").getPublicUrl(frontURL.path);
        const backImageURL = await supabase.storage.from("products").getPublicUrl(backURL.path);

        const {data, error}= await supabase
        .from("products")
        .insert({
          name: formInfo.data.name,
          price: formInfo.data.price,
          brand: formInfo.data.brand,
          size: formInfo.data.size,
          color: formInfo.data.color,
          qty: formInfo.data.qty,
          alert_qty: formInfo.data.alert_qty,
          product_type: formInfo.data.type,
          exp_date: formInfo.data.exp_date,
          man_date: formInfo.data.man_date,
          description: formInfo.data.description,
           back_image_url:backImageURL,
           front_image_url:frontImageURL})
           .select();
       }
      }
  
 return {
    status: true,
    message: "",
 }
}