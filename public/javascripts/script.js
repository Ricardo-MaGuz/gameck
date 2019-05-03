document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

//Navbar
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

const signUpNav = document.getElementById("sign-up-nav")
const logInNav = document.getElementById("log-in-nav")
const signUpLightBox = document.getElementById("sign-up-lightbox")
const logInLightBox = document.getElementById("log-in-lightbox")
const signUpForm = document.getElementById("sign-up-form")
const logInForm = document.getElementById("log-in-form")
const heroButton = document.getElementById("hero-btn")
const joinButton = document.getElementById("join-btn")

signUpNav.addEventListener("click",function() {
  signUpLightBox.classList.remove("hide")
  logInLightBox.classList.add("hide")
})

logInNav.addEventListener("click",function() {
  logInLightBox.classList.remove("hide")
  signUpLightBox.classList.add("hide")
})

heroButton.addEventListener("click",function() {
  signUpLightBox.classList.remove("hide")
  logInLightBox.classList.add("hide")
})
joinButton.addEventListener("click",function() {
  signUpLightBox.classList.remove("hide")
  logInLightBox.classList.add("hide")
})


signUpForm.addEventListener("click",function() {
  event.stopPropagation();
})
logInForm.addEventListener("click",function() {
  event.stopPropagation();
})

signUpLightBox.addEventListener("click",function() {
  signUpLightBox.classList.add("fade-out")
  setTimeout(function(){
    signUpLightBox.classList.add("hide")
    signUpLightBox.classList.remove("fade-out")
  },500);
})
logInLightBox.addEventListener("click",function() {
  logInLightBox.classList.add("fade-out")
  setTimeout(function(){
    logInLightBox.classList.add("hide")
    signUpLightBox.classList.remove("fade-out")
  },500);
})
