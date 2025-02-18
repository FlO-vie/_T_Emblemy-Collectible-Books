// main.js

// Add to cart functionality (example)
document.querySelectorAll('.add-to-cart').forEach(button => {
   button.addEventListener('click', () => {
       alert("Added to cart!");
   });
});

// Form validation (example)
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;

   if (!name || name.length < 3) {
       alert('Name must be at least 3 characters long.');
       event.preventDefault();
   }

   if (!email || !email.includes('@')) {
       alert('Please enter a valid email address.');
       event.preventDefault();
   }

   if (!message || message.length < 10) {
       alert('Message must be at least 10 characters long.');
       event.preventDefault();
   }
});
