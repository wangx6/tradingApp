!function(window,d3){
	'use strict';


	var Bar = function( conf ){
		if(!(this instanceof Bar)) return new Bar(conf);

		this.conf = {
			upBorderColor:'red',
			upBackgroundColor:'red',
			downBorderColor:'green',
			downBackgroundColor:'green'
		};
		this.extendConf(conf);
		this.init();
	};

	Bar.prototype.init = function( conf ){
	};

	Bar.prototype.update = function(){

	};

	Bar.prototype.extendConf = function( conf ){ 
		if(conf)
		for (var i in conf) this.conf[i] = conf[i]; 
		return this;
	};

	window.Bar = Bar;

}(window,d3);