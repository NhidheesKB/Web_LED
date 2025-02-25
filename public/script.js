document.addEventListener("DOMContentLoaded", function() {
    const toggleComputer = document.getElementById("toggleComputer");
    const valueBox = document.getElementById("valueBox");
    const counterBox = document.getElementById("counterBox");
    let counter=0;

    function updateValue() {
        valueBox.textContent = toggleComputer.checked ? "ON" : "OFF";
    }

    toggleComputer.addEventListener("click", function() {
        updateValue();
    });
    function incrementCounter() {
        if (counter <= 255) {
            counterBox.textContent = `${counter}V`;
            counter++;
        } else {
            counter = 0; 
        }
    }
    async function getData(){
        const res=await axios.get('/api/hello')
        console.log(res.data)
    }
    getData()
    setInterval(incrementCounter, 2000);
    updateValue();
});
