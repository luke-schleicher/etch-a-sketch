$(document).ready(function() {

	// First we need to generate a 16x16 grid of square divs using JS

	function gridMaker(size) {

		// Create the grid
		for (var i = 0; i <= size - 1; i++) {
			for (var j = 0; j <= size - 1; j++) {
				$('.container').append('<div class="square"></div>');
			}
			$('.container').append('<div class="cleared"></div>');
		}

		// Adjust square height and width based on number of total squares per side
		var width = $('.container').width() / size;
		$('.square').css({'width': width, 'height': width})

	}

	gridMaker(16);

	/* Next we'll need to set up a hover effect that changes the
	square color when the mouse passes over it */

	function squareHover() {

		$('.square').mouseenter(function() {
			$(this).addClass('gray');
		});

	}

	squareHover();

	/* Next we'll add a button to the top of the screen that clears
	the current grid and creates a popup asking for the number of squares
	per side for a new grid */

	$('#new-grid').click( function() {
		$('.container').empty();
		var sps = prompt("How many squares per side?");

		gridMaker(sps);
		squareHover();

	});
		

	/* Last we'll set it up so each mouse hover makes the square
	only 10% more opaque than before */

		// I will redefine squareHover to carry out this new behavior
		function squareHover() {

		$('.square').mouseenter(function() {
			var opacity = $(this).css( 'opacity') - 0.1;
			$(this).css( 'opacity', opacity );
		}); 

	} 

});