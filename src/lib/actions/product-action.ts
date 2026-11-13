 import {size, z} from "zod";
 
 const validationSechma = z.object({
    name: z.string().min(3,"error"),
    price : z.number().positive("error from not positive"),
    size : z.string(),
    color : z.array(z.string()).min(1, "one color added"),


 }) 

export function addProduct(_prevState : unknown , formData : FormData){
    const validationChecker = validationSechma.safeParse({
        name : formData.get("name"),
        price : Number(formData.get("price")),
        color :formData.getAll("color"),
        size : formData.get("size"),
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