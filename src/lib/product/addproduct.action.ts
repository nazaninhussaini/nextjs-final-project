import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../db/firebase.config"
export async function addProduct(prevState: unknown, formData:FormData){
    const newProduct ={
        name:formData.get("name"),
        price:formData.get("price"),
        category:formData.get("category"),
        size:formData.get("size"),
        desc:formData.get("desc"),
        brand:formData.get("brand"),
        man_data:formData.get("man_data"),
        exp_data:formData.get("exp_data"),
        stock:formData.get("stock"),
        
    }
    addDoc(collection(db,"product"));

    return{
        state: true,
        message: "product added secssufult"
    }
}