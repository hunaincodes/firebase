import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth,(user)=>{

    if(user){
        userEmail.innerText = `Logged in as: ${user.email}`;
    }else{
        window.location.href = "index.html";
    }

});

logoutBtn.addEventListener("click", async ()=>{

    try{

        await signOut(auth);

        window.location.href = "index.html";

    }catch(error){
        alert(error.message);
    }

});