var $firstMain = $(".chairDiv:nth-child(2)");
var $secondMain = $(".chairDiv:nth-child(3)");
var $thirdMain = $(".chairDiv:nth-child(4)");
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


var main = function() {
	$leftNavi.on("click", function() {
		var currentPage = $("#slider .active");
		var nextPage = currentPage.prev();
		if (nextPage.is("nav")) {
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
		if (nextPage.is("nav")) {
			nextPage = $firstMain;
		}
		currentPage.fadeOut(600, function() {
			currentPage.removeClass('active');
			nextPage.fadeIn(600).addClass('active');
		});
	});
	/*
	$circle.on("click", function() {
		// Check which circle and inner circle is lit, swap the circle
		var currentCircle = $(".enabled");
		$(this).addClass("enabled");
		var test = $(this).children();
		$(test).addClass("innerEnabled");
		currentCircle.removeClass("enabled");
		currentCircle.children().removeClass("innerEnabled");
		// Check which image is enabled, swap the image
		var currentImage = $(".active");
		var circleClickedIndex = $(this).index() + 1;
		var nextImage = $(".chairDiv:nth-child(" + circleClickedIndex + ")");
		currentImage.fadeOut(600).removeClass('active');
		nextImage.fadeIn(600).addClass('active');
	}) */
	$pickList.on("click", function() {
		// Show list on click
		$(this).next().toggle();
		// Change opacity on click of the arrow
		$(this).toggleClass("toggleList");
	})
	$li.on("click", function() {
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
		$(this).offsetParent().toggle();
		$pickList.removeClass("toggleList");
		$summary.html(summary());
	})
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

$(document).ready(function() {
	$('input[type=checkbox]').prop('checked', true);
	$summary.html(summary());
	main();
	checkPosition();
})

function summary() {
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
	console.log($transport.prop('checked'));
	if ($transport.prop('checked')) {
		summary += 200;
	}
	return summary + " zł";
}
