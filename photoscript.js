document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    // Here you can handle the form submission, such as sending an email or saving the message to a database
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // For demonstration purposes, we'll just log the form data to the console
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; /* For Safari */
    document.documentElement.scrollTop = 0; 
    behavior: smooth;
}


document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('.scroll-link');
  
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
  
        // Smooth scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  