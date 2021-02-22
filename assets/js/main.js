// Navbar Toggler Button Actions
let navbarToggler = document.getElementById("navbarToggler");
let navbarLinks = document.querySelector('.links');
navbarToggler.onclick = e => {
  e.preventDefault();
  navbarLinks.classList.toggle('active');
}