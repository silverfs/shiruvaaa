$(document).ready(function() {
  const messages = [
    "Who you really are is in the absence of everything that you hold on to so tight. ",
    "If you keep your face towards the sun, your shadow will fall behind you. ",
    "The life you want isn't out of reach; it's just outside your comfort zone. ",
    "A person often meets his destiny on the road he took to avoid it. ",
    "The best time to do something is between yesterday and tomorrow. ",
    "Don't analyse your life more than you live it. ",
    "This world is beautiful, and you're one of them. ",
    "Good decisions come from experience. Experience comes from making bad decisions. ",
    "You need to tear muscle to grow it, so why would it be different for the mind or spirit? "
  ];

  let lastMessage = "";
  let isInitialMessage = true;

  function typeBack($element, callback) {
    const text = $element.text();
    let index = text.length;

    function backspace() {
      if (index > 0) {
        $element.html(text.substring(0, --index) + '<span class="cursor">_</span>');
        setTimeout(backspace, 25); // Faster speed of backspacing
      } else {
        callback();
      }
    }
    backspace();
  }

  function changeMessage() {
    let randomMessage;
    do {
      randomMessage = messages[Math.floor(Math.random() * messages.length)];
    } while (randomMessage === lastMessage);

    lastMessage = randomMessage;
    const $output = $(".terminal .output").first();
    typeBack($output, function() {
      $output.html(randomMessage).typewriter({ speed: 5 });
    });
  }

  // Initial message handling
  const $initialOutput = $(".terminal .output").first();
  $initialOutput.typewriter({ speed: 5 });

  setTimeout(function() {
    isInitialMessage = false;
    changeMessage();
    setInterval(changeMessage, 12000); // Change message every 12 seconds
  }, 14000);
});