var $circleOne = $(".circleMenu:first-child");
var $circleTwo = $(".circleMenu:nth-child(2)");
var $circleThree = $(".circleMenu:nth-child(3)");
var $circleFour = $(".circleMenu:nth-child(4)");
var $circleFive = $(".circleMenu:nth-child(5)");
var $circleSix = $(".circleMenu:nth-child(6)");
var $circle = $(".circleMenu");
var $mail = $("#mail");

function showMail() {
	$mail.hover(function() {
		console.log("vjsdhv");
		$mail.next().toggle();
	});
	$mail.next().mouseover(function() {
		$(this).show();
	})
	$mail.next().mouseleave(function() {
		$(this).hide();
	})
}

$(document).on('ready', function() {
	showMail();
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
		} else if (e.target.classList[1] == "sixth") {
			$(window).scrollTo(".row:nth-child(6) .info", 500);
		}
	})
});

var $labels = $(".actions label");
var $inputs = $("section input");
var keyers = Object.keys($inputs);
$(document).on('ready', function() {
	$labels.on("click", function() {
		var tooltip = $(this).attr("for");
		tooltip = "[for=" + tooltip + "]" + " div";
		$(tooltip).toggle();
	})
	$labels.mouseover(function() {
		for (var i = 0; i < keyers.length - 1; i++) {
			if ($($inputs[keyers[i]]).is(':checked') && $(this).attr("for") === $($inputs[keyers[i]]).attr('id')) {
				var tooltip = $(this).attr("for");
				tooltip = "[for=" + tooltip + "]" + " div";
				$(tooltip).fadeIn(300);
			}
		}
	})
	$labels.mouseleave(function() {
		$(this).find("div").fadeOut(300);
	});
});
