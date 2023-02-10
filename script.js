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
        if(pwds.value !== retype.value){
            retype.classList.add('error');
            retype.setCustomValidity("Passwords should match");
            pwds.classList.add('error');
            pwds.setCustomValidity("Passwords should match");
        }else{
            retype.classList.remove('error');
            retype.setCustomValidity("");
            pwds.classList.remove('error');
            pwds.setCustomValidity("");
        }
    }
    
})


retype.addEventListener('blur', (e) => {
    console.log('Checker');
    console.log(pwds.value);
    console.log(retype.value);


    if(pwds.value !== retype.value){
        retype.classList.add('error');
        retype.setCustomValidity("Passwords should match");
        pwds.classList.add('error');
        pwds.setCustomValidity("Passwords should match");
    }else{
        retype.classList.remove('error');
        retype.setCustomValidity("");
        pwds.classList.remove('error');
        pwds.setCustomValidity("");
    }
})