const inputs = document.querySelectorAll('input, select, textarea');

for(let input of inputs) {
    // Just before submit, the invalid event will fire, let's apply our class there.
    input.addEventListener('invalid', (event) => {
      input.classList.add('error');    
    }, false);
    
    // Optional: Check validity onblur
    input.addEventListener('blur', (event) => {
      input.checkValidity();
    })
}