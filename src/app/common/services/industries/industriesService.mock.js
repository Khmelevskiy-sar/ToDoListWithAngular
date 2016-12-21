(function () {
	'use strict';
	angular.module('app.common')
		.run(run);

	function run($httpBackend, urls) {
		$httpBackend.whenGET(urls.mock('searchIndustriesByTerm')).respond(function (method, url, data, headers) {
			return [200, angular.toJson(getIndustries()), {}];
		});

		function getIndustries() {
			return [
			{
				id: 1,
				name: 'Healthcare Apparel',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectet, vel scelerisque nisl consectet, vel scelerisque nisl consectet.'
			},
			{ id: 2, name: 'Home Healthcare Equipment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectet.' },
			{ id: 3, name: 'Healthcare Equipment Distribution', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectet.' },
			{ id: 4, name: 'Optical Healthcare', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectet.' },
			{ id: 5, name: 'Home Healthcare Services', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectet.' },
			{ id: 6, name: 'Healthcare Providers Specialist Services', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectet.' },
			{ id: 7, name: 'Healthcare Referral Services', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectet.' }
			];
		}
	}
}());
