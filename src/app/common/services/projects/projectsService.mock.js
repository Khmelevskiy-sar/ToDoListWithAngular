(function () {
	'use strict';
	angular.module('app.common')
		.run(run);

	function run($httpBackend, urls) {

		$httpBackend.whenGET(urls.mock('getProjects')).respond(function (method, url, data, headers) {
			return [200, angular.toJson(getProjects()), {}];
		});

		$httpBackend.whenPOST(urls.mock('createProject')).respond(function (method, url, data, headers) {
			data = angular.fromJson(data);
			if (data.projectName === 'error') {
				return [400, { error: {} }, {}];
			}
			return [200, {}, {}];
		});

		function getProjects() {
			return [
			{
				'projectId': '26136', 'expertsCount': null, 'newExpertsFlag': false, 'readyToScheduleFlag': true, 'projectName': 'Heavy Equipment', 'projectOpenDate': '2012-01-27T11:39:16.03-05:00', 'clientId': '103', 'primaryContactId': '2101', 'clientCode': 'xxxxxxxxx', 'subsriptionId': '450', 'isAnonymous': false, 'description': 'Demonstration and testing project for internal client.<br />', 'status': 'Open', 'type': 'Coleman', 'subType': null, 'expirationDate': '2016-05-20T00:00:00-04:00', 'accountManager': {
					'id': '177', 'firstName': 'Lauren', 'lastName': 'Baingo', 'middleInitial': null, 'email': 'lbaingo@colemanrg.com', 'phone': {
						'countryCode': '1', 'number': '6466954821', 'extension': ''
					}
				}, 'requestedConsultationsAmount': null, 'biosSentAmount': 5, 'targetIndustries': [
					{
						'id': '276', 'name': 'Semiconductor Equipment', 'description': 'Manufacturers of semiconductor equipment, including manufacturers of the raw material and equipment used in the solar power industry.'
					}
				], 'targetCompanies': [
					{
						'name': 'Veeco Instruments Inc.', 'ticker': 'VECO', 'isPublic': true
					}
				]
			}, {
				'projectId': '33935', 'expertsCount': null, 'newExpertsFlag': true, 'readyToScheduleFlag': false, 'clientId': '0', 'primaryContactId': '0', 'projectName': 'Without consultations and experts', 'clientCode': null, 'subsriptionId': null, 'description': null, 'status': 'Open', 'type': 'Coleman', 'subType': null, 'expirationDate': null, 'projectOpenDate': '2012-09-13T10:36:48.127Z', 'accountManager': null, 'targetIndustries': [

				], 'targetCompanies': [

				]
			}, {
				'projectId': '33936', 'expertsCount': null, 'newExpertsFlag': true, 'readyToScheduleFlag': true, 'clientId': '0', 'primaryContactId': '0', 'projectName': 'Test_Project_40', 'clientCode': null, 'subsriptionId': null, 'description': null, 'status': 'Open', 'type': 'Coleman', 'subType': null, 'expirationDate': null, 'projectOpenDate': '2013-10-02T15:51:50.16Z', 'accountManager': null, 'targetIndustries': [

				], 'targetCompanies': [

				]
			}, {
				'projectId': '33937', 'expertsCount': null, 'newExpertsFlag': false, 'readyToScheduleFlag': true, 'clientId': '0', 'primaryContactId': '0', 'projectName': 'Test_Project_60', 'clientCode': null, 'subsriptionId': null, 'description': null, 'status': 'Open', 'type': 'Coleman', 'subType': null, 'expirationDate': null, 'projectOpenDate': '2011-12-08T16:36:28.063Z', 'accountManager': null, 'targetIndustries': [

				], 'targetCompanies': [

				]
			}, {
				'projectId': '33938', 'expertsCount': null, 'newExpertsFlag': true, 'readyToScheduleFlag': true, 'clientId': '0', 'primaryContactId': '0', 'projectName': 'Test_Project_80', 'clientCode': null, 'subsriptionId': null, 'description': null, 'status': 'Open', 'type': 'Coleman', 'subType': null, 'expirationDate': null, 'projectOpenDate': '2012-02-07T11:29:53.42Z', 'accountManager': null, 'targetIndustries': [

				], 'targetCompanies': [

				]
			}, {
				'projectId': '52366', 'expertsCount': null, 'newExpertsFlag': true, 'readyToScheduleFlag': false, 'clientId': '0', 'primaryContactId': '0', 'projectName': 'test project', 'clientCode': null, 'subsriptionId': null, 'description': null, 'status': 'Open', 'type': 'Coleman', 'subType': null, 'expirationDate': null, 'projectOpenDate': '2012-04-27T11:03:59.02Z', 'accountManager': null, 'targetIndustries': [

				], 'targetCompanies': [

				]
			}, {
				'projectId': '94013', 'expertsCount': null, 'newExpertsFlag': true, 'readyToScheduleFlag': true, 'clientId': '0', 'primaryContactId': '0', 'projectName': 'Corrugated Cardboard', 'clientCode': null, 'subsriptionId': null, 'description': null, 'status': 'Open', 'type': 'Coleman', 'subType': null, 'expirationDate': null, 'projectOpenDate': '2014-07-16T11:15:54.677Z', 'accountManager': null, 'targetIndustries': [

				], 'targetCompanies': [

				]
			}];
		}
	}
}());
