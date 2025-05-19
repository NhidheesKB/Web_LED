export const config = {
    runtime: "edge",
  };

export default async(req,res)=>{
    if (req.method === "POST") {
        return new Response(JSON.stringify({success:true,message:'Details Recived'}), {
            status: 200,
        });
    }
    return new Response(JSON.stringify({success:false,message:'Method Not Allowed'}), {
        status: 405,
    });
}
