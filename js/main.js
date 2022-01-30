var preloader = document.querySelector('.preloader');
window.addEventListener("load", function(){
    preloader.style.display = "none"
}) 


var checkBox = document.querySelector("input[name=checkbox]");
var navMenu = document.querySelector(".nav-menu");

checkBox.addEventListener('change', function() {
    if(this.checked){
        navMenu.classList.add('open')
    }else{
        navMenu.classList.remove('open')
    }
})
