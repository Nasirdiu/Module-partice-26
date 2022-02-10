document.getElementById('login-button').addEventListener('click',function(){
   
    const userField=document.getElementById('user-email');
    const userEmail=userField.value ;

    const passField=document.getElementById('user-password');
    const userPass=passField.value;
    if(userEmail == 'n' && userPass == 'nn'){
        // console.log('login');
        window.location.href='bank.html'
    }
    else{
        alert('Enter Your Valid User Password')
    }
})