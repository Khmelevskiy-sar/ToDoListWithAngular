(function () {
	'use strict';

	angular
		.module('app.common')
		.factory('urls', function ($window, settings) {
			var urls;

			urls = {
				getProjects: {
					api: 'Projects/',
					mock: /^Projects\/$/,
					isMocked: true //API implemented
				},
				createProject: {
					api: 'Projects/Create',
					mock: /^Projects\/Create/,
					isMocked: true //API implemented
				},
				searchIndustriesByTerm: {
					api: function (term) {
						return 'Projects/Industries/' + encodeURIComponent(term).replace(/\'/g, '%34');
					},
					mock: /^Projects\/Industries\/(.+)/,
					isMocked: true //API implemented
				}
			};

			function api(name) {
				var args = _.slice(arguments, 1, arguments.length),
					apiUrl = urls[name].api,
					rawUrl = angular.isString(apiUrl) ? apiUrl : apiUrl.apply({}, args);

				if (settings.testMode || urls[name].isMocked) {
					return rawUrl;
				}
				return $window.location.protocol + settings.webApiUrl + rawUrl;
			}

			function mock(name) {
				return urls[name].mock;
			}

			return {
				api: api,
				mock: mock
			};
		});
}());
