"use server";
import { getTranslations } from "next-intl/server";
import {size, z} from "zod";
const ImageFormat = ["PNG , JPG , JPEG , GIF , webp"]
export async function addProduct(prevState : any , formData : FormData){
    const t = await getTranslations("dashboard.addProduct.errors");
    const validationSechma = z.object({
        name: z.string().min(3, t("name")),
        price : z.coerce.number().positive(t("price")),
        size : z.string(t("size")),
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

     });
   const dateValidate   =  z.object({
        mandate : z.date(),
        expdate : z.date(),
     }).refine((value)=> value.mandate < value.expdate);

    const validationChecker = validationSechma.safeParse({
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
        front_image : formData.get("front_image") as File,
        back_image : formData.get("back_image") as File,
        product_type : formData.get("type")
    })

    if(!validationChecker.success){
        return {
            status : false,
            message: "validation Error",
            error: validationChecker.error.flatten().fieldErrors,
        }
    }
 return {
    status: true,
    message: "",
 }
}