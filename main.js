let navbar = document.querySelector('.nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.add('p-4');
    navbar.classList.add('bg-white');
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('bg-white');
    navbar.classList.remove('p-8');
    navbar.classList.remove('shadow');
  }
})



