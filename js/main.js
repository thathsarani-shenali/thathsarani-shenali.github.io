
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


      // // for image load
      // const voyageImage = document.querySelectorAll('.voyageImage')
      // $(voyageImage).load(function() {
	// 	// Animate loader off screen
	// 	$(".se-pre-con").fadeOut("slow");;
	// });