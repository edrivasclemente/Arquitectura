//CAROUSEL OWL===========
//inicializando la clase========

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  //finalizando la clase========
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
  })
  //FIN CAROUSEL OWL===========