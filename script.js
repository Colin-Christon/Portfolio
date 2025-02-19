const viewMoreBtn = document.querySelector('.view-more-btn');
const exitBtn = document.querySelector('.exit-btn');
const hiddenCards = document.querySelectorAll('.project-cards.hidden');
const menu = document.getElementById("menu-toggle");
var isLightTheme = true;



function changeTheme(){
  let themeButton = document.getElementById("theme-img");
  let footerText = document.getElementById("footer-text")
  if(isLightTheme){
    themeButton.src = "./images/light.png"
    footerText.innerHTML = "Theme: Dark Mode | Version: 1.0"
    isLightTheme = false;
  }
  else{
    themeButton.src = "./images/dark.png";
    isLightTheme = true
  }
  document.body.classList.toggle("dark-theme");
}

menu.addEventListener("click",()=>{
  document.body.classList.toggle("menu-tog");
})


document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      
      menuToggle.classList.toggle("open");
    });
  });
  
  viewMoreBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => {
      card.classList.remove('hidden');
    });
    viewMoreBtn.style.display = 'none';
    exitBtn.classList.remove('hidden');
  });
  
  exitBtn.addEventListener('click', () => {
    hiddenCards.forEach(card => {
      card.classList.add('hidden');
    });
    viewMoreBtn.style.display = 'inline-block';
    exitBtn.classList.add('hidden');
  });


  const btn = document.getElementById("form-button");
  const form = document.getElementById("con-form");
  const success = document.getElementById("success");
  
  form.addEventListener('submit', function(event) {
     event.preventDefault();
      btn.innerHTML = "sending..."
     const serviceID = 'service_gnfju0p';
     const templateID = 'template_cij011g';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerHTML = 'Send Message';
        success.style.display = "inline";
        form.reset();
        setTimeout(() => {
          success.style.display = "none";
        }, 5000);
      }, (err) => {
        btn.innerHTML = 'Send Message';
      });
  });