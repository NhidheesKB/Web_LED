const toggleComputer = document.getElementById("toggleComputer");
const valueBox = document.getElementById("valueBox");
const counterBox = document.getElementById("counterBox");
const broker = "wss://2a462fd66ce44b21bde8b6550d558ab2.s1.eu.hivemq.cloud:8884/mqtt"; 
const options = {
    clientId: "web_" +crypto.randomUUID(),
    username: "Subscriber",  
    password: "Subscriber@2002", 
    clean: true
};
const client = mqtt.connect(broker, options);
client.on("connect", function () {
    console.log("Connected to HiveMQ Cloud");
    client.subscribe("Led", function (err) {
        if (!err) {
            console.log("Subscribed to led");
        } else {
            console.error("Subscription error:", err);
        }
    });
});

client.on("message", (topic, message)=>{
    const payload =  message.toString();
    try {
        const json=JSON.parse(payload)
        console.log(json)
        switch (topic){
            case 'Led':
                led(json)
                break;
        }
    } catch (error) {
       console.log(payload)   
       console.error(error)   
    }
});
const led=(message)=>{
     counterBox.innerText=`${message.voltage} ${message.Vunit}`
}
const mount=()=>{}
document.addEventListener('DOMContentLoaded',mount)
