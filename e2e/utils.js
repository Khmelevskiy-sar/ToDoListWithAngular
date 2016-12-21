(function () {
	'use strict';

	var utils = {
		baseUrl: 'http://localhost:3000/?dev=1&mock=1&protractor=1/#',

		generateUniqueName: function () {
			return 'test_' + new Date().getTime();
		},

		waitForUrlToChangeTo: function (nextUrl) {
			return utils.wait(function () {
				return browser.getCurrentUrl().then(function (url) {
					return url === nextUrl;
				});
			});
		},

		waitForUrlToChange: function (action) {
			return browser.getCurrentUrl().then(function (url) {
				action();

				return utils.wait(function () {
					return browser.getCurrentUrl().then(function (newUrl) {
						return newUrl !== url;
					});
				})
					.then(function () {
						return browser.getCurrentUrl();
					});
			});
		},

		goToUrl: function (url) {
			url = utils.baseUrl + url;

			return browser.get(url)
				.then(function () {
					utils.log('goToUrl: ' + url);
				});
		},

		wait: function (callback) {
			return browser.wait(callback, utils.constants.timeout);
		},

		log: function (msg) {
			console.log('|||||||||||||- ' + msg); // eslint-disable-line
		},

		constants: {
			timeout: 20000
		},

		setMockNowDate: function (date) {
			return browser.executeScript(
				'var injector = $(document).find("[ng-app]").injector();' +
				'injector.get("dateService").now = function() { return new Date(' + date.getTime() + '); };' +
				'var $state = injector.get("$state");' +
				'$state.go($state.current, {}, { reload: true });')
				.then(function () {
					return browser.waitForAngular();
				});
		}
	};

	module.exports = utils;
}());
