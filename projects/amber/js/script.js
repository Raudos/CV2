var $containerRows = $(".container-fluid>.row");
var $button = $(".button");
var $person = $(".person");
var $hover = $(".hover");
var $quoteNav = $(".circleContainer .circle")
var $quotes = $(".quote");
var $quote, $quoteCircle, $child;

//thank you stackoverflow
//http://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate
$.fn.animateRotate = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({deg: 0}).animate({deg: angle}, args);
    });
};
$.fn.animateRotateReturn = function(angle, duration, easing, complete) {
    var args = $.speed(duration, easing, complete);
    var step = args.step;
    return this.each(function(i, e) {
        args.step = function(now) {
            $.style(e, 'transform', 'rotate(' + now + 'deg)');
            if (step) return step.apply(this, arguments);
        };

        $({deg: 360}).animate({deg: angle}, args);
    });
};
//------------------------------------------------------------------
//                    FUNCTIONS
//------------------------------------------------------------------

function $paddingMe() {
  $width = $(window).width();
  if ($width > 1500) {
    $width = ($width - 1500) / 2;
    $width += "px";
    $containerRows.css("padding-left", $width);
    $containerRows.css("padding-right", $width);
  } else {
    $containerRows.css("padding-left", "0.5em");
    $containerRows.css("padding-right", "0.5em");
  }
}

function $slideMenuMobile() {
  $button.on("click", function() {
    $(".upper").css("height", "20%");
    $(".lower").css("height", "80%");
    $(this).children(".upper").animate({
      height: "100%"
    }, 300);
    $(this).children(".lower").animate({
      height: "0%"
    }, 300);
  })
}
function $slideMenuPC() {
  $button.on("mouseenter", function() {
    $(this).children(".upper").animate({
      height: "100%"
    }, 300);
    $(this).children(".lower").animate({
      height: "0%"
    }, 300);
  });
  $button.on("mouseleave", function() {
    $(this).children(".upper").animate({
      height: "20%"
    }, 500);
    $(this).children(".lower").animate({
      height: "80%"
    }, 300);
  });
}
function $adjustHeight() {
  $person.css("height", $person.width() + "px");
}
function $hoverPerson() {
  $person.hover(function() {
    $(this).children(".hover").toggle();
    $(this).children(".about").toggle();
  });
}
function $animateChart() {
  $(".graph:nth-child(1)").children(".outer").on("mouseenter", function () {
    $(this).children("img").animateRotate(-300, 500, "linear");
  });
  $(".graph:nth-child(3)").children(".outer").on("mouseenter", function () {
    $(this).children("img").animateRotate(-240, 500, "linear");
  });
  $(".graph:nth-child(5)").children(".outer").on("mouseenter", function () {
    $(this).children("img").animateRotate(-315, 500, "linear");
  });
  $(".outer").on("mouseleave", function() {
    $(this).children("img").animateRotateReturn(0, 500, "linear");
  })
}
function $showTeam() {
  $(".link").on("click", function() {
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).parent().prev().animate({
        bottom: "0%"
      }, 500, function() {
        $(this).children(".name").animate({
          top: "-5%"
        }, 500);
      });
      $(this).parent().prev().removeClass("imShadow");
    } else {
      $(this).addClass("active");
      $(this).parent().prev().addClass("imShadow");
      $(this).parent().prev().animate({
        bottom: "-25%"
      }, 500, function() {
        $(this).children(".name").animate({
          top: "-400%"
        }, 500);
      });
    }
  });
}

function $nextQuote() {
  /* Add class .clicked to the corresponding .quote after .quoteNav is clicked */
  $quoteNav.on("click", function() {
    $quote = $(".quote.clicked");
    $quoteCircle = $(".circle.clicked");
    $quoteCircle.removeClass("clicked");
    $(this).addClass("clicked");
    for (var i = 1; $quotes.length >= i; i++) {
      $child = ":nth-child(" + i + ")";
      if ($(this).is($child)) {
        $quoteSelector = ".quote" + $child;
        $quote.removeClass("clicked");
        $($quoteSelector).addClass("clicked");
      }
    }
  })
};
//------------------------------------------------------------------
//                    READY
//------------------------------------------------------------------

$(document).on("ready", function() {
  $paddingMe();
  $(window).resize(function() {
    $paddingMe();
  });
  if (window.matchMedia('(max-width: 991px)').matches) {
    $slideMenuMobile();
  } else {
    $slideMenuPC();
  }
  $adjustHeight();
  $hoverPerson();
  $animateChart();
  $showTeam();
  $nextQuote()
})
