/* SMOOTH SCROLL */

$(document).ready(function(){
  let scroll_link = $('.nav-link');
  //smooth scrolling -----------------------
  scroll_link.click(function(e){
    e.preventDefault();
    let url = $('body').find($(this).attr('href')).offset().top;
    $('html, body').animate({
      scrollTop : url
    },50);
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  return false;	
  });
});

/* WOW ANIMATIONS */

new WOW().init();

/* BAGUETTE BOX GALLERY */

baguetteBox.run('.showcase-images');
