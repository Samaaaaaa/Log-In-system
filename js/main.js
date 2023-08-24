let loginemail = document.getElementById("userEmail");
let loginPassword = document.getElementById("userPassword");
let loginBtn = document.querySelector("#loginBtn");
let alertMessage = document.getElementById("alertMessage");
let dataContainer = [];

if (localStorage.getItem("data") != null) {
  //=======================Local Storage=======================
  dataContainer = JSON.parse(localStorage.getItem("data"));
}

function loginUser() {
  if(checkEmpty() == true){
    // alert
    getMessage('All Inputs Required', 'red')
  }
  else{
    if (checkEmailAndPAssword() == true) {
      // hwadih ll home page
      window.location.href = "home.html";
    } else {
      // alert message
      getMessage("Email or Password not correct", "red");
    }
  }
  
}

function checkEmailAndPAssword() {
  for (var i = 0; i < dataContainer.length; i++) {
    if (
      dataContainer[i].email == loginemail.value &&
      dataContainer[i].password == loginPassword.value
    ){
    localStorage.setItem("username", dataContainer[i].name);
    return true;
  }
  }
}

function getMessage(text, color) {
  alertMessage.classList.replace("d-none", "d-block");
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}

function checkEmpty(){
  if(loginemail.value == '' || loginPassword.value == '' ){
      return true
  }
  else{
      return false
  }
}

loginBtn.addEventListener("click", loginUser);

