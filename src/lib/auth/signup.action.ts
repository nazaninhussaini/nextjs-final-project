"use srver"
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
import { cookies } from "next/headers";
export async function register (prev:unknown , formData:FormData) {

  try{
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();
    const username = formData.get("username")?.toString();
    if(email && password){
       const credentialuser = await createUserWithEmailAndPassword(email,password);
      const user = credentialuser.user;
      await updateProfile(user,{
        displayName : username,
      })
      const cookieInfo = await cookies();
      cookieInfo.set("token",user.uid,{
        maxAge :60*60*24*30,
      });


      console.log(user);
      console.log(user.email);
      return{
        state:true,
        message : "user created successfully",
      };
    }

  }
  catch(error){
    return {
        state: false,
        message : "somthing went creating the acount",

    }
  }
}