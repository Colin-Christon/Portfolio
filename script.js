const viewMoreBtn = document.querySelector('.view-more-btn');
const exitBtn = document.querySelector('.exit-btn');
const hiddenCards = document.querySelectorAll('.project-cards.hidden');

function changeTheme(){

  document.body.classList.toggle("dark-theme");
}

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

  const success = document.getElementById("success");
  document.getElementById('con-form')
   .addEventListener('submit', function(event) {
     event.preventDefault();
      btn.innerHTML = "sending..."
     const serviceID = 'service_gnfju0p';
     const templateID = 'template_cij011g';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerHTML = 'Send Message';
        success.style.display = "inline";
      }, (err) => {
        btn.innerHTML = 'Send Message';
      });
  });