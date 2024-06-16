// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkm9l9LFoC5aPvj7JTTpBb898Exi_0UEw",
  authDomain: "project-49938.firebaseapp.com",
  projectId: "project-49938",
  storageBucket: "project-49938.appspot.com",
  messagingSenderId: "47137925768",
  appId: "1:47137925768:web:0eea69767060672b850d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)