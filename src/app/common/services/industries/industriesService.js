(function () {
	'use strict';
	angular.module('app.common')
		.factory('industriesService', industriesService);

	function industriesService($http, urls) {
		return {
			searchIndustriesByTerm: searchIndustriesByTerm
		};

		function searchIndustriesByTerm(term) {

			term.replace(/"/g, '');
			term.replace(/'/g, '');

			return $http.get(urls.api('searchIndustriesByTerm', term), $http.transform(function (result) {
				return _.map(result, function (item) {
					return {
						id: item.id,
						name: item.name,
						description: item.description
					};
				});
			}));

		}
	}
}());
