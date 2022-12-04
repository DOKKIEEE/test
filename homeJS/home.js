// loginBtn function
const loginDisplay = document.querySelector("#logIn");
const loginBtn = document.querySelector("#loginBtn");
  loginBtn.addEventListener("click",showLogin);
  function showLogin () {
    loginDisplay.style.display = "flex";
   }

// exitBtn function
const exitBtn = document.querySelector("#exitBtn");
   exitBtn.addEventListener("click",close);
   function close() {
     loginDisplay.style.display = "none";
   }
  
