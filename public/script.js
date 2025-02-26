const toggleComputer = document.getElementById("toggleComputer");
const valueBox = document.getElementById("valueBox");
const counterBox = document.getElementById("counterBox");
const broker = "wss://2a462fd66ce44b21bde8b6550d558ab2.s1.eu.hivemq.cloud"; 
const options = {
    clientId: "web_" + crypto.randomUUID(),
    username: "Subscriber",  
    password: "Subscriber@2002", 
    clean: true
};
const client = mqtt.connect(broker, options);
client.on("connect", function () {
    console.log("Connected to HiveMQ Cloud");
    client.subscribe("test", function (err) {
        if (!err) {
            console.log("Subscribed to test");
        } else {
            console.error("Subscription error:", err);
        }
    });
});

client.on("message", function (topic, message) {
    console.log(topic,message)
});
const mount=()=>{

}
document.addEventListener('DOMContentLoaded',mount)
