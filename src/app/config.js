(function () {
	'use strict';

	angular
		.module('app')
		.config(config);

	function config(settings, $httpProvider, urlHelperProvider) {

		var isMockDataMode = !!urlHelperProvider.getUrlParam(window, 'mock');
		if (isMockDataMode) {
			settings.testMode = true;
		}
	}

}());
