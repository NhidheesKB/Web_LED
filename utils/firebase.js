import { initializeApp } from 'firebase/app';
const getApp=()=>{
    const firebaseConfig = {
        apiKey: process.env.FIRE_BASE_API_KEY,
        authDomain:process.env.FIRE_BASE_DOMAIN ,
        projectId:process.env.FIRE_BASE_PROJECT_ID ,
        storageBucket:process.env.FIRE_BASE_STORAGE_BUCKET ,
        messagingSenderId:process.env.FIRE_BASE_MESSAGE_SENDER_ID ,
        appId:process.env.FIRE_BASE_APP_ID ,
        // measurementId:process.env.FIRE_BASE_MEASUREMENT_ID 
    };
    const app = initializeApp(firebaseConfig);
    return app
}
export{getApp}