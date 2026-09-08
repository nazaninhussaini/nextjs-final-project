"use srver"
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth";
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