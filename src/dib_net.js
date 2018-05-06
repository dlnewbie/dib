(function(global) {
	"use strict";
	
	var Net = function() {
		this.layers = [];
	}

	Net.prototype = {
		createFromJSON: function(json) {
			for (var i=0; i<json.length; i++) {
				var layer = Layer.create(json[i].type);
				this.layers.push(layer);
			}
		}
	}

	global.Net = Net;
})(dib);
