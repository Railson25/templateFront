const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const fadeElements = document.querySelector('.has-fade')

btnHamburger.addEventListener('click', function() {
    console.log('open')

    if(btnHamburger.classList.contains('open')) { // Close menu
        body.classList.remove('noscroll')
        btnHamburger.classList.remove('open')
        fadeElements.classList.add('has-fade')
        
    }else { // Open menu
        body.classList.add('noscroll')
        btnHamburger.classList.add('open')
        fadeElements.classList.remove('has-fade')
    }
    
})