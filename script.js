// Add event listener to form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get form data
    var name = document.querySelector('#name').value;
    var email = document.querySelector('#email').value;
    var message = document.querySelector('#message').value;
    // Send form data to server
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      // Display success message
      document.querySelector('.success-message').innerHTML = 'Thank you for submitting the form!';
    })
    .catch(function(error) {
      console.error(error);
    });
  });
  $(function() {
    var btn = $(".btn");
    
    btn.on("click", function() {
      
      $(this).addClass('btn-progress');
      setTimeout(function() {
        btn.addClass('btn-fill')
      }, 500);
      
      setTimeout(function() {
        btn.removeClass('btn-fill')
      }, 4100);
      
      setTimeout(function() {
        btn.addClass('btn-complete')
      }, 4100);
    
    });
  })