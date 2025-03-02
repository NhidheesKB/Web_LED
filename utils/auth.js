import { app} from "./firebase.js";
import { getAuth,signInWithEmailAndPassword} from "firebase/auth";
const auth = getAuth(app);
export const login=async(email,password)=>{
    let errorCode,errorMessage;
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