const viewMoreBtn = document.querySelector('.view-more-btn');
const exitBtn = document.querySelector('.exit-btn');
const hiddenCards = document.querySelectorAll('.project-cards.hidden');


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

  function sendEmail() {
    let params = {
      service_id: 'service_gnfju0p',
      template_id: 'template_cij011g',
      user_id: 'lukFEYq4cqP4L9PZx',
      template_params: {
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        message: document.getElementById("msg").value,
      },
    };
  
    // Create and configure the request
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
      .then((response) => {
        if (response.ok) {
          alert('Your mail has been sent!');
        } else {
          return response.json().then((error) => {
            alert('Oops... a ' + JSON.stringify(error));
          });
        }
      })
      .catch((error) => {
        alert('Oops... ' + error);
      });
  }