import { getApp} from "./firebase.js";
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";
export const login=async(email,password)=>{
    let errorCode,errorMessage;
    const app=getApp()
    const auth = getAuth(app);
   try {
      const res=await signInWithEmailAndPassword(auth,email,password)
      const token = await res.user.getIdToken();
      return {success:true,token}
    } catch (error) {
      errorCode = error.code;
      errorMessage = error.message;
   }
   return {success:false,errorCode,errorMessage}
}