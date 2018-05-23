$("#menu-button").click(function() {
  window.setTimeout(function() {
    $("#menu-button").css("bottom", "-30%");
    $("#menu-section").css("top", "0");
  }, 0);
  window.setTimeout(function() {
    $("#menu-button-open").css("bottom", "0");
  }, 500);
});

$("#menu-button-open").click(function() {
  window.setTimeout(function() {
    $("#menu-button-open").css("bottom", "-30%");
    $("#menu-section").css("top", "-100%");
  }, 0);
  window.setTimeout(function() {
    $("#menu-button").css("bottom", "0");
  }, 500);
});

$(document).ready(function() {
  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed); // Go
    return false;
  });
  $("#menu-button-open").css("bottom", "-30%");
});