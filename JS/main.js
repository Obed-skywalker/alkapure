
/*=============== email Js ===============*/
// send email from Form
const btn = document.getElementById('btn-email');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();
 
    btn.value = 'Sending...';
 
    const serviceID = 'default_service';
    const templateID = 'template_iz8zmzq';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       alert('Sent!');
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
     });
 });

/*=============== SHOW MENU ===============*/
let menu= document.querySelector('#bars-icon');
let navbar= document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

menu.onclick= () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
/*=============== DARK LIGHT THEME ===============*/ 
let swiperProjects = new Swiper(".projects-container", {
 loop:true,
 spaceBetween:30,

 autoplay: {                         //autoplay
  delay: 2000,  
},   
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",

  },
  mousewheel: true,
  keyboard: true,
});