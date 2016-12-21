(function () {
	'use strict';

	angular
		.module('app')
		.config(config);

	function config(settings) {
		settings.testMode = true;
	}

}());
