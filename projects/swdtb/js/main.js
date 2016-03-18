// Blastdoors
var $firstBlast = $(".blastdoors:nth-child(1)");
var $secondBlast = $(".blastdoors:nth-child(2)");
var $blastWidth = $firstBlast.width();
var $closed = $firstBlast.hasClass("closed");
// Blastdoors text
var $firstBlastText = $(".blastdoorsText:nth-child(1)");
var $secondBlastText = $(".blastdoorsText:nth-child(2)");
var $blastWidthText = $firstBlastText.width();
var $closedText = $firstBlastText.hasClass("closed");
// Layers
var $layer3 = $("img.layer3");
//Fields
var $info = $("#info");
// Functions
var open = function() {
	$firstBlast.animate({
			left: -$blastWidth
		}, 1500);
	$secondBlast.animate({
		right: -$blastWidth
	}, 1500, function() {
		$(".factionLogo").css("pointer-events", "auto");
	});
	$firstBlast.removeClass("closed");
}
var close = function() {
	$firstBlast.animate({
			left: "0px"
		}, 1500);
	$secondBlast.animate({
			right: "0px"
		}, 1500);
	$firstBlast.addClass("closed");
	open();
}
var openText = function() {
	$firstBlastText.animate({
			left: -$blastWidthText
		}, 1500);
	$secondBlastText.animate({
		right: -$blastWidthText
	}, 1500, function() {
		$layer3.css("pointer-events", "auto");
	});
	$firstBlastText.removeClass("closed");
}
var closeText = function(event) {
	$firstBlastText.animate({
			left: "0px"
		}, 1500);
	$secondBlastText.animate({
			right: "0px"
		}, 1500);
	$firstBlastText.addClass("closed");
	if (event.type == "ajaxComplete" || event.target.classList[1] != "factionLogo") { //It is important to have event.type first, otherwise you will have an error
		openText();
	}
}
// Script
$(".factionLogo").on('click', function(event) {
	//Disable faction buttons
	$(".factionLogo").css("pointer-events", "none");
	var clickedLogo = this.classList[0];
	clickedLogo = "." + clickedLogo + ":not(.factionlogo):not(.tooltip)";
	$closed = $firstBlast.hasClass("closed");
	if ($closed) {
		$(clickedLogo).fadeIn(2000);
		open();
	} else {
		close();
		$layer3.fadeOut(1000);
		$(clickedLogo).delay(1000).fadeIn(3000);
	}
	closeText(event)
})
// Mousover 
$layer3.hover(function() {
	classToggle = this.classList[0]; //This has to be [0] element, as i put all the marking element of the side as a first one
	classToggle = "." + classToggle;
	$(this).siblings(classToggle).css("display", "inline");
}, function() {
	$(this).siblings(classToggle).css("display", "none");
}); 
// Ajax
$layer3.on('click', function() {
	var $whatPartToLoad = this.id;
	var $whatFileToLoad = "ajax.html"
	var $stringMe = $whatFileToLoad + " #" + $whatPartToLoad;
	$layer3.css("pointer-events", "none");
	$("#info").fadeOut(2000, function() {
		$info.load($stringMe);
	});
})
$(document).ajaxComplete(function(event) {
	$closedText = $firstBlastText.hasClass("closed");
	if ($closedText) {
		$("#info").delay(1000).fadeIn(4000);
		openText();
	} else {
		$("#info").delay(1000).fadeIn(4000);
		closeText(event);
	}
	swapPhoto();
})
// Gallery
function swapPhoto () {
	$(".galery").on('click', 'img', function() {
		var $currentImg = $(".galery img:first-child").replaceWith(this);
		$(".galery img:first-child").replaceWith(this);
		$(".galery").append($currentImg);
		console.log($currentImg);
	});
}