var $firstMain = $(".chairDiv:nth-child(1)");
var $secondMain = $(".chairDiv:nth-child(2)");
var $thirdMain = $(".chairDiv:nth-child(3)");
var $firstCircle = $(".naviCircle:first-child");
var $secondCircle = $(".naviCircle:nth-child(2)");
var $thirdCircle = $(".naviCircle:nth-child(3)");
var $circle = $(".naviCircle");
var $leftNavi = $("#leftNavi");
var $rightNavi = $("#rightNavi");
var $pickList = $(".pickList");
var $li = $("#pickContainer li");
var $firstName = $("#names p:first-child");
var $secondName = $("#names p:nth-child(2)");
var $thirdName = $("#names p:nth-child(3)");
var $firstPrice = $("#prices p:first-child");
var $secondPrice = $("#prices p:nth-child(2)");
var $thirdPrice = $("#prices p:nth-child(3)");
var $summary = $("#summary p:nth-child(2)");
var $containerRows = $(".container-fluid > .row");
var $input = $("#pickContainer > div");



//----------------------------------------------------------------------
//												Functions
//----------------------------------------------------------------------

var main = function() {
	//simple slider for chair images
	$leftNavi.on("click", function() {
		var currentPage = $("#slider .active");
		var nextPage = currentPage.prev();
		if (nextPage.length == 0) {
			nextPage = $thirdMain;
		}
    currentPage.fadeOut(600, function() {
			currentPage.removeClass('active');
			nextPage.fadeIn(600).addClass('active');
		});
	});
	$rightNavi.on("click", function() {
		var currentPage = $("#slider .active");
		var nextPage = currentPage.next();
		if (nextPage.length == 0) {
			nextPage = $firstMain;
		}
		currentPage.fadeOut(600, function() {
			currentPage.removeClass('active');
			nextPage.fadeIn(600).addClass('active');
		});
	});
	$input.on("click", function() {
		//show list on click
		$(this).children("ul").toggle();
		//change opacity of the arrow on click
		$(this).children("div").toggleClass("toggleList");
	});
	$li.on("click", function() {
		//takes data-name of clicked element and adds it to the form
		if (this.className == "type") {
			$("#pickContainer div:first-child input").attr("placeholder", this.innerHTML);
			$firstName.html($(this).html());
			$firstPrice.html($(this).attr("data-name"));
		} else if (this.className == "color") {
			$("#pickContainer div:nth-child(2) input").attr("placeholder", this.innerHTML);
			$secondName.html($(this).html());
			$secondPrice.html($(this).attr("data-name"));
		} else {
			$("#pickContainer div:nth-child(3) input").attr("placeholder", this.innerHTML);
			$thirdName.html($(this).html());
			$thirdPrice.html($(this).attr("data-name"));
		}
		$summary.html(summary());
	})
	//adds transports price to the form
	$("#transportLabel").on("click", function() {
		$("#transport").toggle();
		$(".priceTransport").toggle();
		$summary.html(summary());
	})
	$("#userLabel").on("click", function() {
		$("#userImg").toggle();
	})
	$('#transportInput').change(function(){
	    $summary.html(summary());
	});

}
function checkPosition() {
	//depending on the width of the screen fires appropriate function
	if (window.matchMedia('(max-width: 500px)').matches) {
		$(".outerCircle").on("click", function(event) {
			var $target = $(event.target);
			if ($target.hasClass("circled") || $target.parent().hasClass("circled")) {
				// Do nothing
			} else if ($target.is(".outerCircle:first-child") || $target.parent().is(".outerCircle:first-child")) {
				var circle = ".outerCircle:first-child";
				var offert = ".offert:first-child";
				selectors(circle, offert);
			} else if ($target.is(".outerCircle:nth-child(2)") || $target.parent().is(".outerCircle:nth-child(2)")) {
				var circle = ".outerCircle:nth-child(2)";
				var offert = ".offert:nth-child(3)";
				selectors(circle, offert);
			} else if ($target.is(".outerCircle:nth-child(3)") || $target.parent().is(".outerCircle:nth-child(3)")) {
				var circle = ".outerCircle:nth-child(3)";
				var offert = ".offert:nth-child(5)";
				selectors(circle, offert);
			}
		})
		function selectors(circle, offert) {
			var $currentCircle = $(".circled");
			$currentCircle.removeClass("circled");
			$(circle).addClass("circled");
			$(".visible").removeClass("visible");
			$(offert).addClass("visible");
		}

	}
}
function summary() {
	//total price to pay calculated from elements in the form
	var $first = parseInt($firstPrice.html(), 10);
	var $second = parseInt($secondPrice.html(), 10);
	var $third = parseInt($thirdPrice.html(), 10);
	var $transport = $("#transportInput");
	if (isNaN($first)) {
		$first = 0;
	}
	if (isNaN($second)) {
		$second = 0;
	}
	if (isNaN($third)) {
		$third = 0;
	}
	var summary = $first + $second + $third;
	if ($transport.prop('checked')) {
		summary += 200;
	}
	return summary + " zł";
}
function $paddingMe() {
  $width = $(window).width();
  if ($width > 1500) {
    $width = ($width - 1500) / 2;
    $width += "px";
    $containerRows.css("padding-left", $width);
    $containerRows.css("padding-right", $width);
  } else {
    $containerRows.css("padding-left", "15px");
    $containerRows.css("padding-right", "15px");
  }
}

//----------------------------------------------------------------------
//												Ready
//----------------------------------------------------------------------

$(document).ready(function() {
	$('input[type=checkbox]').prop('checked', true);
	$summary.html(summary());
	main();
	checkPosition();
	$paddingMe();
	$(window).resize(function() {
    $paddingMe();
  });
})
