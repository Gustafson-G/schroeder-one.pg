/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link');   

function linkAction(){
/*Active link*/
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');

/*Remove menu mobile*/
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));





//Get TOP button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/*SCROLL HOME*/
sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home_desc',{delay: 200}); 
sr.reveal('.home_desc2',{delay: 250}); 
sr.reveal('.home_img',{delay: 400}); 
sr.reveal('.icons',{ delay: 400}); 

/*SCROLL SERVICES*/
sr.reveal('.services section',{}); 
sr.reveal('.job-1',{delay: 400});
sr.reveal('.job-2',{delay: 400}); 
sr.reveal('.job-3',{delay: 400}); 


/*SCROLL BACKGROUND*/
sr.reveal('.background_subtitle',{}); 
sr.reveal('.owner-img',{delay: 400}); 
sr.reveal('.bg-name',{delay: 400}); 
sr.reveal('.bg-desc',{delay: 400});
sr.reveal('.bg-list',{delay: 400});


/*SCROLL ENVIRONMENTS & ARTWORK*/

sr.reveal('.work_img',{delay: 400}); 

/*SCROLL CONTACT*/
sr.reveal('.contact_input',{interval: 200}); 
