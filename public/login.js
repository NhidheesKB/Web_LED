// import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js'
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js'
// import { getAuth } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js'
// const firebaseConfig = {
//     apiKey: "AIzaSyB9iPgTEf8Jac1l6SYsPWEozq8cgGPBxcM",
//     authDomain: "react-native-first-6aa66.firebaseapp.com",
//     projectId: "react-native-first-6aa66",
//     storageBucket: "react-native-first-6aa66.firebasestorage.app",
//     messagingSenderId: "154285244668",
//     appId: "1:154285244668:web:d36cb3be3bbb4a1b01d779",
//     measurementId: "G-ZCPMFX8CXN"
// };


// initializeApp(firebaseConfig);
const errorNode=document.getElementById('error');
async function login(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    try {
        const res=await axios.post('/api/login',{username,password},{withCredentials:true})
        window.location.href="/dashboard.html"
    } catch (error) {
        errorNode.innerHTML="Invalid Credencials"
        setTimeout(()=>{
            errorNode.innerHTML=''
        },2500)
    }
}