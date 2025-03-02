import { login } from "../utils/auth.js";
export const config = {
    runtime: "edge",
  };
  
export default async(req,res)=>{
    if (req.method === "POST") {
        const { username,password } = await req.json(); 
        const loginres=await login(username,password)
        if(loginres.token){
            return new Response(JSON.stringify({ success: true, message: "Login successful" }), {
                status: 200,
                headers: {
                  "Content-Type": "application/json",
                  "Set-Cookie": `auth_token=${loginres.token}; Path=/; Secure; HttpOnly; SameSite=Strict`,
                },
            });
        }else{
            return res.status(419).json({success:false,message:'Invalid Credentials'})
        }
    }
    return res.status(405).json({ error: "Method Not Allowed" });
}