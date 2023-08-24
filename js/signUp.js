let userNameInput = document.getElementById("userNameInput");
let userEmailInput = document.getElementById("userEmailInput");
let userPasswordInput = document.getElementById("userPasswordInput");

let signBtn = document.getElementById("signBtn");

let alertMessage = document.getElementById("alertMessage");

let dataContainer = [];

if (localStorage.getItem("data") != null) {
  //=======================Local Storage=======================
  dataContainer = JSON.parse(localStorage.getItem("data"));
}

signBtn.addEventListener("click", createData);
console.log(dataContainer);

function createData() {
  let data = {
    name: userNameInput.value,
    email: userEmailInput.value,
    password: userPasswordInput.value,
  };

  if(checkEmpty() == true)
  {
    getMessage('All Inputs Required', 'red')
  }
  else{

    if(checkEmailExist() == true){
        getMessage('Email Already Exist', 'red')
    }
    else{
        dataContainer.push(data);
        localStorage.setItem("data", JSON.stringify(dataContainer)); //=======================Local Storage=======================
        clear();
        getMessage('Success', 'green');
        console.log(dataContainer);

    }
    
  }

}

function getMessage(text, color) {
  alertMessage.classList.replace("d-none", "d-block");
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}

function clear() {
  userNameInput.value = "";
  userEmailInput.value = "";
  userPasswordInput.value = "";
}

function checkEmpty(){
    if(userNameInput.value == '' || userEmailInput.value == '' || userPasswordInput.value == '' ){
        return true
    }
    else{
        return false
    }
}

function checkEmailExist(){
    for(var i=0; i< dataContainer.length; i++ ){
        if(dataContainer[i].email == userEmailInput.value)
        return true
    }
}



signBtn.addEventListener("click", createData);
