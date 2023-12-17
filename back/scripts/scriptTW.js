import 'slick-carousel/slick/slick.css';
import 'slick-carousel';




$(document).ready(function() {
    // Gérer l'affichage/caché des dropdowns
    $('.dropdown').hover(function() {
        $(this).find('.dropdown-menu').toggleClass('hidden');
    });

    // Cacher les dropdowns lorsqu'on clique ailleurs sur la page
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').addClass('hidden');
        }
    });
});
$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
    });
  });