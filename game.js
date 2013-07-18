$(document).ready(function(){
	$('#openModal').hide();
	var counter = 1

	$('#open_game a').on('click', function() {
      $('#open_game').hide();
      	$('#openModal').show();

      
	});

	$('.close').on('click', function() {
		$('#open_game').show();
		reset_game();
	})

	$('.box').on('click', function() {
		
		if (counter == 1) {
			if ($(this).is(':empty')) {
				$(this).prepend('<img src="theo.png">');
				counter = 2
				row(this, 'O');
				column(this, 'O');
				angle(this, 'O');
				draw('O');
			};
		}

		else if (counter == 2) {
			if ($(this).is(':empty')) {
				$(this).prepend('<img src="thex.png">');
				counter = 1
				row(this, 'X');
				column(this, 'X');
				angle(this, 'X');
				draw('X');
			};
		};
    });
});


	row1 = new Array();
    row2 = new Array();
    row3 = new Array();
    column1 = new Array();
    column2 = new Array();
    column3 = new Array();
    angle1 = new Array();
    angle2 = new Array();
    game_total = new Array();


Array.prototype.unique = function() {
	var tmp = {}, out = [];
	for(var i = 0, n = this.length; i < n; ++i) {
		if(!tmp[this[i]]) { tmp[this[i]] = true; out.push(this[i]); }
	};
	return out;
};

function row (row, player) {

	if (row.parentNode.className == 'row1') {
		row1.push(player);
		if (row1.length == 3) {
			winner(row1);
		};
	};
	if (row.parentNode.className == 'row2') {
		row2.push(player);
		if (row2.length == 3) {
			winner(row2);
		};
	};
	if (row.parentNode.className == 'row3') {
		row3.push(player);
		if (row3.length == 3) {
			winner(row3);
		};
	};
};

function column (column, player) {

	if (column.className == 'box one') {
		column1.push(player);
		if (column1.length == 3) {
			winner(column1);
		};
	};
	if (column.className == 'box two') {
		column2.push(player);
		if (column2.length == 3) {
			winner(column2);
		};
	};
	if (column.className == 'box three') {
		column3.push(player);
		if (column3.length == 3) {
			winner(column3);
		};
	};
};

function angle (angle, player) {

	if (angle.id == 'angle1' || angle.id == 'middle') {
		angle1.push(player);
		if (angle1.length == 3) {
			winner(angle1);
		};
	};
	if (angle.id == 'angle2' || angle.id == 'middle') {
		angle2.push(player);
		if (angle2.length == 3) {
			winner(angle2);
		};
	};
};

function winner (check) {
	if (check.unique().length == 1) {
		var winner = check[0]
		alert('Player ' + winner + ' wins!');
		reset_game();
	};
};

function draw (move) {
    game_total.push(move);
    if (game_total.length == 9) {
    	alert('This game is a draw!');
    	reset_game();
    };
}

function reset_game() {
	$('.box').empty();
	row1.length = 0;
    row2.length = 0;
    row3.length = 0;
    column1.length = 0;
    column2.length = 0;
    column3.length = 0;
    angle1.length = 0;
    angle2.length = 0;
    game_total.length = 0;
}