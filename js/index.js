 ScrollReveal().reveal('.language', { delay: 200 });
 ScrollReveal().reveal('#fadeIn', { delay: 200 });

 var state = 1;

 $('#mas_proyectos').hide();

 $('#ver_mas').on('click', function() {
     if (state % 2 == 0) {
         document.getElementById("plus").style.transform = "rotate(360deg)";
         $('#mas_proyectos').hide();
         $('#mas_menos').empty();
         $('#mas_menos').append('Ver más proyectos');
     } else {
         document.getElementById("plus").style.transform = "rotate(360deg)";
         $('#mas_proyectos').show();
         $('#mas_menos').empty();
         $('#mas_menos').append('Ver menos proyectos');
     }
     state++;
     console.log(state);
 });