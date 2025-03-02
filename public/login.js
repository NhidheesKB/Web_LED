const errorNode=document.getElementById('error');
async function login(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    try {
        const res=await axios.post('/api/login',{username,password},{withCredentials:true})
        window.location.href="/"
    } catch (error) {
        errorNode.innerHTML="Invalid Credencials"
        setTimeout(()=>{
            errorNode.innerHTML=''
        },2500)
    }
}