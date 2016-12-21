(function () {
	'use strict';

	angular
		.module('app')
		.constant('settings', angular.extend({}, {
			loginPageUrl: '/login/Login.aspx',
			indexMode: true,
			refreshAuthTokenIntervalMinutes: 10,
			webApiUrl: ''
		}, window.PUBLISH_SETTINGS)); // eslint-disable-line
}());
