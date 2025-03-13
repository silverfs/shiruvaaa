$(document).ready(function() {
  // Check localStorage for the background setting
  if (localStorage.getItem('backgroundEnabled') === 'false') {
    $('#backgroundSwitch').prop('checked', false);
    $('body').css('background-image', 'radial-gradient(circle at center, #141d3a, #052329)');
    $('.noise').css('background-image', 'none');
    $('body').css('text-shadow', 'none');
  }

  $('#backgroundSwitch').on('change', function() {
    if ($(this).is(':checked')) {
      $('body').css('background-image', 'radial-gradient(circle at center, #141d3a, #052329), url("/assets/img/static.gif")');
      $('.noise').css('background-image', 'url("/assets/img/static.gif")');
      $('body').css('text-shadow', '0 0 1px rgba(51, 156, 255, 0.4), 0 0 2px rgba(255, 255, 255, 0.8)');
      localStorage.setItem('backgroundEnabled', 'true');
    } else {
      $('body').css('background-image', 'radial-gradient(circle at center, #141d3a, #052329)');
      $('.noise').css('background-image', 'none');
      $('body').css('text-shadow', 'none');
      localStorage.setItem('backgroundEnabled', 'false');
    }
  });
});
