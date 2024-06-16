import { auth } from "/project/code/config.js";
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const provider = new GoogleAuthProvider();
const emailInput = document.querySelector(".email")
const passwordInput = document.querySelector(".password")
const buttonInput = document.querySelector("#specoin")
const googleInput = document.querySelector("#Googlecoin")
buttonInput.addEventListener('click', 
    (e)=>{
        e.preventDefault()
        const email = emailInput.value 
        const password = passwordInput.value
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert("Đăng nhập thành công")
            window.location.href = "/project/code/kem.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }
)
const xuligoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    alert ("Xin chào" + user.displayName + "đến với trang web")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
googleInput.addEventListener("click", xuligoogle)