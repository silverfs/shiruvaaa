$(document).ready(function() {
  // Check localStorage for the background setting
  if (localStorage.getItem('backgroundEnabled') === 'false') {
    $('#backgroundSwitch').prop('checked', false);
    $('body').css('background-image', 'radial-gradient(circle at center, #141d3a, #052329)');
    $('.noise').css('background-image', 'none');
  }

  $('#backgroundSwitch').on('change', function() {
    if ($(this).is(':checked')) {
      $('body').css('background-image', 'radial-gradient(circle at center, #141d3a, #052329), url("/assets/img/static.gif")');
      $('.noise').css('background-image', 'url("/assets/img/static.gif")');
      localStorage.setItem('backgroundEnabled', 'true');
    } else {
      $('body').css('background-image', 'radial-gradient(circle at center, #141d3a, #052329)');
      $('.noise').css('background-image', 'none');
      localStorage.setItem('backgroundEnabled', 'false');
    }
  });
});
