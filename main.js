
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

// Get the phone icon
var phoneIcon = document.getElementById("phone-icon");

// Add a click event listener to the phone icon
phoneIcon.addEventListener("click", function() {
  window.location.href = "tel:+254793031288";
});

// Read more about section
const readMoreBtn = document.querySelector('.read-more');
const hiddenContent = document.querySelector('.hidden');

readMoreBtn.addEventListener('click', (event) => {
  event.preventDefault();
  hiddenContent.classList.toggle('hidden');
  readMoreBtn.textContent = hiddenContent.classList.contains('hidden') ? 'Read More' : 'Read Less';
});

// Google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-L2Z25SZGYN');


