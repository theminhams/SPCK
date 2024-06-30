// const usernameInput = document.querySelector(".footer__name")
// const passwordInput = document.querySelector(".footer__pass")
// const buttonInput = document.querySelector(".footer__btn")
// // Retrieve user information from local storage
// const userinfo = JSON?.parse(localStorage.getItem("user"));
// const username = userinfo?.username;

// // Access the div element with the class "test"
// const testDiv = document.querySelector('.test');

// // Update the content of the div with the username
// testDiv.textContent = username;
// buttonInput.addEventListener('click',
//     (e) =>{
//         localStorage.removeItem("user");
//         testDiv.textContent = "bạn";
//     } 
// )

const usernameInput = document.querySelector(".footer__name");
const passwordInput = document.querySelector(".footer__pass");
const buttonInput = document.querySelector(".footer__btn");

// Retrieve user information from local storage
// const userinfo = JSON.parse(localStorage.getItem("user"));
// const username = userinfo ? userinfo.username : "";
const emailname = localStorage.getItem("name")

// Access the div element with the class "test"
const testDiv = document.querySelector('.test');

// Update the content of the div with the username
testDiv.textContent = emailname;

buttonInput.addEventListener('click', (e) => {;
    e.preventDefault();
    localStorage.removeItem("name");
    alert("Đăng xuất thành công")
    window.location="/project/index.html"
});
