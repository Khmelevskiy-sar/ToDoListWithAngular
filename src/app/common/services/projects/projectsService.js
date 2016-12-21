(function () {
	'use strict';
	angular.module('app.common')
		.factory('projectsService', projectsService);

	function projectsService($http, urls) {
		return {
			query: query,
			create: create
		};

		function query() {
			return $http.get(urls.api('getProjects'), $http.transform(function (result) {
				return _.map(result, function (item) {
					return {
						id: item.projectId,
						name: item.projectName,
						expertsCount: item.expertsCount,
						expertsNewInvolved: 1,
						dateCreated: item.projectOpenDate,
						newExpertsFlag: item.newExpertsFlag,
						readyToScheduleFlag: item.readyToScheduleFlag
					};
				});
			}));
		}

		function create(project) {
			return $http.post(urls.api('createProject'), {
				projectName: project.name,
				projectDescription: project.description,
				targetIndustriesIds: project.targetIndustriesIds
			});
		}

	}
}());

