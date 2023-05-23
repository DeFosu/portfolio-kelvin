var button = document.querySelector('.nav__btn');
var element = document.querySelector('.nav');
var openLinks = document.querySelectorAll('.nav__item');

button.addEventListener('click', function() {
    element.classList.toggle('open');
    
    
});


for (var i = 0; i < openLinks.length; i++) {
openLinks[i].addEventListener("click", myFunction);
}


function myFunction() {
if (element.classList.contains('open')) {
    element.classList.toggle('open');
    }
}


AOS.init();
