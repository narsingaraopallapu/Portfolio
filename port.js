
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetElement.offsetTop - 50, 
      behavior: 'smooth'
    });
  });
});

const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});


scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');

  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert('Please fill out all fields!');
  } else {
    alert('Message sent successfully!');
  }
});
