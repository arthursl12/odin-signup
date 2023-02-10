const inputs = document.querySelectorAll('input, select, textarea');

for(let input of inputs) {
    function chkVal(e){
        input.checkValidity();
    }


    // Just before submit, the invalid event will fire, let's apply our class there.
    input.addEventListener('invalid', (event) => {
      input.classList.add('error');    
    }, false);
    
    // Optional: Check validity onblur
    input.addEventListener('blur', chkVal)
}

const pwds = document.querySelector('input[name=password]');
const retype = document.querySelector('input[name=confirmpassword]');
pwds.removeEventListener('blur', chkVal);
retype.removeEventListener('blur', chkVal);

pwds.addEventListener('blur', (e) => {
    console.log('Checker PWD1');
    console.log(pwds.value);
    console.log(retype.value);

    if (retype.value){
        pwdCheck(pwds,retype);
    }
    
})


function pwdCheck(pwd1, pwd2){
    const pwds = document.querySelector('input[name=password]');
    if(pwd1.value !== pwd2.value){
        pwd1.classList.add('error');
        pwd1.setCustomValidity("Passwords should match");
        pwd2.classList.add('error');
        pwd2.setCustomValidity("Passwords should match");

        if (!document.querySelector('.error-msg').textContent){
            let errorMsg = document.querySelector('.error-msg');
            errorMsg.textContent = "Passwords should match";
        }
    }else{
        pwd1.classList.remove('error');
        pwd1.setCustomValidity("");
        pwd2.classList.remove('error');
        pwd2.setCustomValidity("");
        let errorMsg = document.querySelector('.error-msg');
        errorMsg.textContent = "";
    }
}

retype.addEventListener('blur', (e) => {
    console.log('Checker');
    console.log(pwds.value);
    console.log(retype.value);


    pwdCheck(pwds,retype);
})