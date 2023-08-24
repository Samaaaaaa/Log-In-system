let welcome = document.getElementById('welcome')
let logoutBtn = document.getElementById('logout')

if(localStorage.getItem('username') != null){
    welcome.innerHTML = `Welcome ${localStorage.getItem('username')}`
}

function logout(){
    // render to login page
    // remove username from home page
      window.location.href = "index.html";
      localStorage.removeItem('username');
}

logoutBtn.addEventListener('click', logout)