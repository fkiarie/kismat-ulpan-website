
document.querySelector('#menu').addEventListener('click',()=>{
    document.querySelector('nav ul').classList.toggle('showmenu')
})

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = 0;

function myFunction() {
  sticky = navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
}
