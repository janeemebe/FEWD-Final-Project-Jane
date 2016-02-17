$(".left-arrow").click(function(e) {
	console.log("left clicked")

})

$(".right-arrow").click(function(e) {
	console.log("right clicked")

})

$(".tile-button").click(function(e) {
	console.log("button clicked");
	if ($(this).closest('.tile').hasClass('flipped')) {
		$(this).closest('.tile').removeClass('flipped');
	} else {
		$('.tile').removeClass('flipped');
		$(this).closest('.tile').addClass('flipped');
	}
});