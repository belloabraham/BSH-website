import './main.scss';
import Cookies from 'js-cookie'

const preloader = document.querySelector('.preloader');
window.addEventListener("load", function(){
    preloader.style.display = "none"
}) 


const checkBox = document.querySelector("input[name=checkbox]");
const navMenu = document.querySelector(".nav-menu");

checkBox.addEventListener('change', function() {
    if(this.checked){
        navMenu.classList.add('open')
    }else{
        navMenu.classList.remove('open')
    }
})

  function enableTracking(){
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-37TCZ8TRFV');
  }

if(Cookies.get('bsh')){
  enableTracking()
}else{
    var cookieNotice = document.getElementById('cookie-notice')
    cookieNotice.style.display ="block"
    var agreeBtn = document.getElementById('cookie-btn')
    agreeBtn.addEventListener('click', function(){
      cookieNotice.style.display ="none"
      enableTracking()
      Cookies.set('bsh', 'true', { expires: 365})
    })
}

