let navToggle = document.querySelector('.nav--toggle');
let nav = document.querySelector('#nav');

navToggle.onclick = function(){
  nav.classList.toggle('active');
};