"use server";
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { cookies } from "next/headers";
import { auth } from "../../../db/firebase.config";
import { email, z } from "zod";
import { redirect } from "next/navigation";

const registerShema =z.object({
  username: z.string().min(3,"the user must be at least 3 chars"),
  email:z.string("Please enter a valide email address"),
  password:z.string().min(5,"the passwort must be at least 5 chreacters"),
})


export async function register (prev:unknown , formData:FormData) {

  try{
   const result = registerShema.safeParse({
      username:formData.get("username")?.toString(),
      email:formData.get("email")?.toString(),
      password:formData.get("password")?.toString(),
    })
   if (!result.success){
    return{
      state: false,
      message : result.error.issues[0].message,
    }
   }
      const{username,email,password} =result.data
       const credentialuser = await createUserWithEmailAndPassword
       (auth, email,password);

      const user = credentialuser.user;
      await updateProfile(user,{
        displayName:username
      })
      const cookieInfo = await cookies();
      cookieInfo.set("token",user.uid,{
        maxAge :60*60*24*30,
      });

      if(user){
        redirect("/");
      }
      
      return{
        state:true,
        message : "user created successfully",
      };
    }


  catch(error){
    return {
        state: false,
        message : "somthing went creating the acount",

    }
  }
}