let autoScrollEnabled = true;
const isLargeScreen = Math.max(window.innerWidth, screen.width) > 600;
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isLandscape = window.matchMedia("(orientation: landscape)").matches;

function toggleAutoScroll() {
  autoScrollEnabled = !autoScrollEnabled;
  $('#autoscroll-toggle').text(autoScrollEnabled ? 'Disable Autoscroll' : 'Enable Autoscroll');
}

// Disable autoscroll by default if it's a small screen
if (!isLargeScreen || (isMobile && isLandscape)) {
  autoScrollEnabled = false;
}

// Initialize the autoscroll toggle after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const autoscrollToggle = document.getElementById('autoscroll-toggle');
  if (autoscrollToggle) {
    // Initial label
    autoscrollToggle.textContent = autoScrollEnabled ? 'Disable Autoscroll' : 'Enable Autoscroll';
    autoscrollToggle.addEventListener('click', toggleAutoScroll);
  }
});

$.fn.typewriter = function(options) {
  const settings = $.extend({
    speed: 2.5,
    pauses: {}
  }, options);

  this.each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function() {
      if ("<" == b.substring(a, a + 1)) {
        for (; ">" != b.substring(a, a + 1);) a++;
      }
      c.html(b.substring(0, a++) + '<span class="cursor">' + (a & 3 ? "_" : "") + '</span>');

      if (autoScrollEnabled && c.scrollTop() + c.innerHeight() >= c[0].scrollHeight - 40) {
        c.scrollTop(c[0].scrollHeight);
      }

      if (a < b.length) {
        // Check if the current position matches any of the pause IDs
        var currentHtml = b.substring(d, a);
        var pauseId = Object.keys(settings.pauses).find(id => currentHtml.includes(`id="${id}"`));
        if (pauseId) {
          setTimeout(function() {
            d = a; // Update the start position after the pause
            e();
          }, settings.pauses[pauseId]);
        } else {
          setTimeout(e, (3 + 10 * Math.random()) * settings.speed);
        }
      } else {
        $('.cursor').addClass('blink');
        if ($('body').attr('data-page-type') !== '404') {
          sessionStorage.setItem('animationPlayed', 'true');
        }
      }
    };
    e();
  });
  return this;
};

if ($('body').attr('data-page-type') !== '404' && !sessionStorage.getItem('animationPlayed')) {
  $(".terminal").typewriter({
    pauses: {
      'pause1': 2500,
      'pause2': 1000,
      'pause3': 5000,
      'pause4': 12000,
      'pause5': 19000,
    }
  });
} else if ($('body').attr('data-page-type') === '404') {
  $(".terminal").typewriter({
    pauses: {
      'pause6': 5000,
      'pause7': 1000,
    }
  });
  $(".terminal").typewriter();
}