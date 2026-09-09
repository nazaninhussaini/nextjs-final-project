export async function login(prev:unknown, formData:FormData) {
    try{
        const email = formData.get("email")?.toString();
        const password = formData.get("password")?.toString();
        if(email && password){
         const credentialuser =   await signInUserWithEmailAndPassword(auth,email,password);
         const user = credentialuser.user;
         if(!user){
            return{
                state : false,
                message: "Email or passeord is incorrec",
            }
         }
        }
        return{
            state : true,
            message : "User logged In successfully ",
        }
    }
    catch(error){
        return{
            return{
                state: false,
                message: "Somthing went wrong",
            }
        }
    }
    
}