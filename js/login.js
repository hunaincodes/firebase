import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");
const error = document.getElementById("error");

onAuthStateChanged(auth,(user)=>{
    if(user){
        window.location.href = "home.html";
    }
});

loginBtn.addEventListener("click", async ()=>{

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    error.innerText = "";

    if(!email || !password){
        error.innerText = "All fields are required";
        return;
    }

    try{

        await signInWithEmailAndPassword(auth,email,password);

        window.location.href = "home.html";

    }catch(err){

        switch(err.code){
            case "auth/invalid-credential":
                error.innerText = "Invalid Email or Password";
                break;

            default:
                error.innerText = err.message;
        }
    }

});