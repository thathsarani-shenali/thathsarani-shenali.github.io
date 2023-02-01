(function () {
   'use strict'
      const forms = document.querySelectorAll('.requires-validation')
      Array.from(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
            }
            form.classList.add('was-validated')
      }, false)
})
})()

$('.nav-link').on('click',function() {
      $('.navbar-collapse').collapse('hide');
});
      
// contact me 