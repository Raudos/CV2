//Variables
var $hex = $("header .hexagon img:first-child");
var $hexThree = $(".container-fluid > .row:nth-child(3) .hexagon img");
var $invisible = $(".invisible");
var $scroller = $("#scroller");
var $attr, $selector, $selectorSection;
var $quoteNav = $(".quoteNav");
var $quotes = $(".quote");
var $active, $child, $visible, $quoteSelector;
var $leftNav = $("#nav img:first-child");
var $rightNav = $("#nav img:last-child");
var $team = $(".person");
var $burger = $("#burger");
var $menu = $("#menu");
var $checker = 0;
//Functions
function $showMenu() {
  $burger.on("click", function() {
    $menu.toggle();
    //if control variable is 0 change to 1, otherwise leave 0
    if ($checker == 0) {
      $checker = 1;
    } else {
      $checker = 0;
    }
  });
}
function $swapHamburger() {
  $burger.on("mouseover", function() {
    //if control variable is not 0 it means that menu is triggered, no need for color swap
    if ($checker == 0) {
      var src = $(this).attr("src").match(/[^\.]+/) + "Purple.png";
      $(this).attr("src", src);
    }
  });
  $burger.on("mouseout", function() {
    if ($checker == 0) {
      var src = $(this).attr("src").replace("Purple.png", ".png");
      $(this).attr("src", src);
    }
  });
}
function $showTeamSmall() {
  $leftNav.on("click", function() {
    $active = $(".person:not(.hidden-xs)");
    $active.addClass("hidden-xs");
    $active.prev(".person").removeClass("hidden-xs");
    $active = $(".person:not(.hidden-xs)");
    if ($active.length == 0) {
      $(".person:last-child").removeClass("hidden-xs");
    }
  });
  $rightNav.on("click", function() {
    $active = $(".person:not(.hidden-xs)");
    $active.addClass("hidden-xs");
    $active.next(".person").removeClass("hidden-xs");
    $active = $(".person:not(.hidden-xs)");
    if ($active.length == 0) {
      $(".person:first-child").removeClass("hidden-xs");
    }
  });
};
function $showTeamBig() {
  $leftNav.on("click", function() {
    $active = $(".teamActive");
    $active.removeClass("teamActive");
    $active.prev(".person").addClass("teamActive");
    $active = $(".teamActive");
    if ($active.length == 2) {
      $(".person:last-child").addClass("teamActive");
    }
  });
  $rightNav.on("click", function() {
    $active = $(".teamActive");
    $active.removeClass("teamActive");
    $active.next(".person").addClass("teamActive");
    $active = $(".teamActive");
    if ($active.length == 2) {
      $(".person:first-child").addClass("teamActive");
    }
  });
};
function $nextQuote() {
  /* Add class .visible to the corresponding .quote after .quoteNav is clicked */
  $quoteNav.on("click", function() {
    $active = $(".active");
    $visible = $(".visible");
    $active.removeClass("active");
    $(this).addClass("active");
    for (var i = 1; $quotes.length >= i; i++) {
      $child = ":nth-child(" + i + ")";
      if ($(this).is($child)) {
        $quoteSelector = ".quote" + $child;
        $visible.removeClass("visible");
        $($quoteSelector).addClass("visible");
      }
    }
  })
};
function $showMePicked() {
  /* Show subsections corresponding to the clicked image */
  $hex.on("click", function() {
    $attr = $(this).attr("data-name");
    $selector = "[data-name=" + $attr + "]";
    $selectorSection = $selector + ":not(img)";
    $($selector).removeClass("invisible");
    $("footer").removeClass("invisible");
    $(window).scrollTo($selectorSection, 2000);
  });
};
function $showMeAll() {
  /* Show all previously hidden subsections, move to first one */
  $scroller.on("click", function() {
    $invisible.removeClass("invisible");
    $(window).scrollTo(".container-fluid > .row:nth-child(2)", 2000);
  });
}
function $hexHover() {
  /* This whole function relies on the structure of .hexagon class div, which looks like this:
  <img(hexagonal shape), img(icon)>. Both images are siblings, which is why i used .prev() and .next() to target them.
  Function later adds/removes "Purple" from the src attribute of image on hover */
  $hex.on("mouseover", function() {
    var src = $(this).attr("src").match(/[^\.]+/) + "Purple.png";
    $(this).attr("src", src);
  });
  $hex.on("mouseout", function() {
    var src = $(this).attr("src").replace("Purple.png", ".png");
    $(this).attr("src", src);
  });
  $hex.next().on("mouseover", function() {
    var src = $(this).prev().attr("src").match(/[^\.]+/) + "Purple.png";
    $(this).prev().attr("src", src);
  });
  $hex.next().on("mouseout", function() {
    var src = $(this).prev().attr("src").replace("Purple.png", ".png");
    $(this).prev().attr("src", src);
  });
  $hexThree.on("mouseover", function() {
    var src = $(this).attr("src").match(/[^\.]+/) + "Purple.png";
    $(this).attr("src", src);
    if ($(this).is(":first-child")) {
      var srcNext = $(this).next().attr("src").match(/[^\.]+/) + "Purple.png";
      $(this).next().attr("src", srcNext);
    } else {
      var srcPrev = $(this).prev().attr("src").match(/[^\.]+/) + "Purple.png";
      $(this).prev().attr("src", srcPrev);
    }
  });
  $hexThree.on("mouseout", function() {
    var src = $(this).attr("src").replace("Purple.png", ".png");
    $(this).attr("src", src);
    if ($(this).is(":first-child")) {
      var srcNext = $(this).next().attr("src").replace("Purple.png", ".png");
      $(this).next().attr("src", srcNext);
    } else {
      var srcPrev = $(this).prev().attr("src").replace("Purple.png", ".png");
      $(this).prev().attr("src", srcPrev);
    }
  });
}


$(document).on("ready", function() {
  $hexHover();
  $showMeAll();
  $showMePicked();
  $nextQuote();
  if (window.matchMedia('(max-width: 768px)').matches) {
    $showTeamSmall();
  } else {
    $showTeamBig();
  }
  $swapHamburger();
  $showMenu();
  /*
  $(window).resize(function() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      $showTeamSmall();
    } else {
      $showTeamBig();
    }
  });*/
})
