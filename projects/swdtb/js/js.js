var $firstBlast = $(".blastdoors");
var $secondBlast = $(".blastdoors:nth-child(2)");
var $check = $(".click");
$check.on("click", function() {
	$firstBlast.fadeOut(500);
});