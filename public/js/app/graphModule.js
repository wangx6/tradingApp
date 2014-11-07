!function(d3){
	'use strict';

	var 

	_data = null,
	_board = null,

	_init = function(){
		// Start trade module
		console.log('start trade module');
		_board = window.Board();
	}

	App.on('ready',_init);
	
}(d3);
