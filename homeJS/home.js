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
//dropdown button
const ddList = document.querySelector("#navBar");
const ddBtn = document.querySelector("#ddBtn");
   ddBtn.addEventListener("click", showList);
   function showList() {
     ddList.style.display = "flex";
   }
//dropdown closeBtn 
const closeDd = document.querySelector("#closeList");
   closeDd.addEventListener("click", hideList);
   function hideList() {
     ddList.style.display = "none";
   }


