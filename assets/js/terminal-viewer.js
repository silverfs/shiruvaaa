$.fn.typewriter = function(options) {
  const settings = $.extend({
    speed: 1
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
      c.html(b.substring(d, a++) + '<span class="cursor">' + (a & 3 ? "_" : "") + '</span>');
      if (c.scrollTop() + c.innerHeight() >= c[0].scrollHeight - 40) { // Allow a small buffer
        c.scrollTop(c[0].scrollHeight); // Scroll to the bottom only if near the bottom
      }
      if (a < b.length) {
        setTimeout(e, (3 + 10 * Math.random()) * settings.speed);
      } else {
        $('.cursor').addClass('blink');
      }
    };
    e();
  });
  return this;
};

$(".terminal").typewriter();