$(document).ready(function(){ 

$('.panel').hide();


// $('.links').delegate('a', 'click', function() {
//   $('div#' + this.parentElement.id + '-panel').fadeToggle()
//   $('.panel').not('#' + this.parentElement.id + '-panel').fadeOut('fast')
// });

 $( "#about-link" ).click(function() {
    $('div#about-panel').fadeToggle();
    $('.panel').not('#about-panel').hide();
  });
 $( "#code-link" ).click(function() {
    $('div#code-panel').fadeToggle();
    $('.panel').not('#code-panel').hide();
  });
 $( "#contact-link" ).click(function() {
    $('div#contact-panel').fadeToggle();
    $('.panel').not('#contact-panel').hide();
  });

});