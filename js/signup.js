import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const signupBtn = document.getElementById("signupBtn");
const error = document.getElementById("error");

signupBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    error.innerText = "";

    if(!email || !password){
        error.innerText = "All fields are required";
        return;
    }

    if(password.length < 6){
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    try{
        await createUserWithEmailAndPassword(auth,email,password);

        alert("Signup Successful");
        window.location.href = "index.html";

    }catch(err){
        error.innerText = err.message;
    }

});