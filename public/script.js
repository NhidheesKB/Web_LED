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
client.on("connect", async function () {
    console.log("Connected to HiveMQ Cloud");
    client.subscribe("Led");
    client.subscribe("Switch");
});

client.on("message", (topic, message)=>{
    const payload =  message.toString();
    try {
        const str=decodeJson(payload)
        switch (topic){
            case 'Led':
                led(str)
                break;
            case 'Switch':
                updateText(str)
                break;
        }
    } catch (error) {
       console.log(payload)   
       console.error(error)   
    }
});
const decodeJson=(str)=>{
    try{
        return JSON.parse(str)
    }catch(error){
        return str
    }
}
const led=(message)=>{
     counterBox.innerText=`${message.voltage} ${message.Vunit}`
}
const updateText=(message)=>{
    const state=message=='on'
    valueBox.innerHTML=state?'ON':"OFF"
    toggleComputer.checked=state
    
}
const toggleSwitch=async(e)=>{
    try {
        const {checked}=e.target
        valueBox.innerHTML=checked?'ON':"OFF"
        const res=await axios.post('/api/toggle',{status:checked})
        updateText(checked?'on':'off');
    } catch (error) {
        console.error(error)
    }    
}
const mount=()=>{
    toggleComputer.addEventListener('change',toggleSwitch)
}
document.addEventListener('DOMContentLoaded',mount)
