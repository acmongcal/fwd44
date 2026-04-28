const output = document.getElementById('output');
const login = document.getElementById('btn-log-in');
const logout = document.getElementById('btn-log-out');

login.addEventListener('click', function(){
    username = window.prompt("What is your name?");
    output.textContent = `Hello, ${username}. Click the button below to logout`;
    login.style.display='none';
    login.setAttribute('disabled','disabled');
    logout.style.display='block';
    logout.removeAttribute('disabled');
});

logout.addEventListener('click', function(){
    loggedin = window.confirm('Are you sure you want to logout?');
    if(loggedin == true){
        output.textContent = 'You are now logged out. Click the login button to log in again.';
        logout.style.display='none';
        logout.setAttribute('disabled','disabled');
        login.style.display='block';
        login.removeAttribute('disabled');
    }
    else{
        output.textContent = 'You cancelled the logout. You are still logged in.'; 
    }
});