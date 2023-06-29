let buttons = document.querySelectorAll('.btn-1');

function toggleText(button) {
    let text = button.nextElementSibling;
  

    text.classList.toggle('hide');
    if (!text.classList.contains('hide')) {
      button.textContent = 'Close'; 
    } else {
      button.textContent = 'Info'; 
    }
  }
  
 
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      toggleText(button);
    });
  });
  
