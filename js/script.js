var $circleOne = $(".circleMenu:first-child");
var $circleTwo = $(".circleMenu:nth-child(2)");
var $circleThree = $(".circleMenu:nth-child(3)");
var $circleFour = $(".circleMenu:nth-child(4)");
var $circleFive = $(".circleMenu:nth-child(5)");
var $circle = $(".circleMenu");

$(document).on('ready', function() {
	$circle.on('click', function(e) {
		if (e.target.classList[1] == "first") {
			$(window).scrollTo(".row:nth-child(1)", 500);
		} else if (e.target.classList[1] == "second") {
			$(window).scrollTo(".row:nth-child(2) .info", 500);
		} else if (e.target.classList[1] == "third") {
			$(window).scrollTo(".row:nth-child(3) .info", 500);
		} else if (e.target.classList[1] == "fourth") {
			$(window).scrollTo(".row:nth-child(4) .info", 500);
		} else if (e.target.classList[1] == "fifth") {
			$(window).scrollTo(".row:nth-child(5) .info", 500);
		}	
	})
});
