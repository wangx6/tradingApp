!function(window,d3){
	'use strict';

	var Board = function(conf){
		if(!(this instanceof Board)) return new Board(conf);

		this.conf = conf;
		this.data = null;
		this.barCtnr = [];
		this.init();
	};

	Board.prototype.init = function(){
		var self = this;
		d3.json('data/data.json', function (error, data) {
			if (error) return console.warn(error);
			self.data = data;
			self.draw(data);
		});
	};

	Board.prototype.draw = function( data ){
		var 
		wrap = d3.select('.main-graph-wrap'),
		i,
		self = this;

		for (i in data){
			this.barCtnr.push( window.Bar({
				upBorderColor:'red',
				upBackgroundColor:'red',
				downBorderColor:'yellow',
				downBackgroundColor:'yellow'
			}) );
		}
		console.log(this.barCtnr);
	};

	window.Board = Board;

}(window,d3);