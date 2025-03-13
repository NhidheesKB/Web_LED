import mqtt from "mqtt";
export default async(req,res)=>{
    if (req.method === "POST") {
        const { status } = req.body; 
        const state=status?'on':'off';
        let client =await mqtt.connectAsync(process.env.MQTT_URL,{
            username: process.env.MQTT_USERNAME,
            password: process.env.MQTT_PASSWORD,
            protocol:'mqtts',
            rejectUnauthorized:false,
        });
        if (!client.connected) {
            return res.status(500).json({ success: false, error: "MQTT not connected" });
        }      
        client.publish("Switch", state,{qos:0});
        return res.status(200).json({success:true})
      }
      return res.status(405).json({ error: "Method Not Allowed" });
}