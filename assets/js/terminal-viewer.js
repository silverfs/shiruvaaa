$.fn.typewriter = function(options) {
  const settings = $.extend({
    speed: 2.5,
    pauses: {} // Object with pause IDs and their durations
  }, options);

  this.each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function() {
      if ("<" == b.substring(a, a + 1)) {
        // Skip over HTML tags
        for (; ">" != b.substring(a, a + 1);) a++;
      }
      c.html(b.substring(0, a++) + '<span class="cursor">' + (a & 3 ? "_" : "") + '</span>');
      if (Math.max(window.innerWidth, screen.width) > 600 && 
          c.scrollTop() + c.innerHeight() >= c[0].scrollHeight - 40) {
        c.scrollTop(c[0].scrollHeight); // Scroll to the bottom only if near the bottom
      }

      if (a < b.length) {
        // Check if the current position matches any of the pause IDs
        var currentHtml = b.substring(d, a);
        var pauseId = Object.keys(settings.pauses).find(id => currentHtml.includes(`id="${id}"`));
        if (pauseId) {
          setTimeout(function() {
            d = a; // Update the start position after the pause
            e();
          }, settings.pauses[pauseId]); // Use the specified pause duration
        } else {
          setTimeout(e, (3 + 10 * Math.random()) * settings.speed);
        }
      } else {
        $('.cursor').addClass('blink');
        sessionStorage.setItem('animationPlayed', 'true');
      }
    };
    e();
  });
  return this;
};

if (!sessionStorage.getItem('animationPlayed')) {
  $(".terminal").typewriter({
    pauses: {
      'pause1': 2500,
      'pause2': 1000,
      'pause3': 5000,
      'pause4': 15000,
      'pause5': 22000,
    }
  });
}