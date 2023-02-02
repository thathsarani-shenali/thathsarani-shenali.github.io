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
      
// for scroll animation
// .section-content
const observer =new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                  entry.target.classList.add('show-content');
            } else {
                  entry.target.classList.remove('show-content')
            }
      });
});

const hiddenElement =  document.querySelectorAll('.section-content');
hiddenElement.forEach((el)=> observer.observe(el));

// for contact setup email 
$("#contact-me-form").submit(function(e){
      e.preventDefault();
      var action = $(this).attr("action");
      $.ajax({
        type: "POST",
        url: action,
        crossDomain: true,
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType: false,
        headers: {
          "Accept": "application/json"
        }
      }).done(function() {
        $('#modal-success').modal('show');
        document.getElementById("contact-me-form").reset();
        var element = document.getElementById("contact-me-form");
        element.classList.remove("was-validated");
      }).fail(function() {
        $('#modal-failed').modal('show');
      });
});