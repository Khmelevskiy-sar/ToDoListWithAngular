/// <reference path="../../../testHelpers/_reference.js" />
/// <reference path="projectsService.mock.js" />
/// <reference path="../../urls.js" />
/// <reference path="projectsService.js" />
/// <reference path="../../utils/httpExtensions.js" />
/// <reference path="projectsService.mock.js" />


(function () {
	'use strict';

	describe('projectsService', function () {
		beforeEach(module('app'));
		beforeEach(module('app.common'));
		beforeEach(module('ngMockE2E'));

		var projectsService,
			$httpBackend,
			urls,
			promise,
			fakeProjectList;

		//Declare angularJS service instance before each test
		beforeEach(inject(function (_$httpBackend_, _projectsService_, _urls_) {
			$httpBackend = _$httpBackend_;
			urls = _urls_;
			projectsService = _projectsService_;
			fakeProjectList = [
					{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
			];


		}));

		it('should query projects list', function (done) {
			//setting $httpBackend to listen matched request and respond fake data
			$httpBackend.expectGET(/^Projects\/$/).respond(angular.toJson(fakeProjectList));

			// Act
			promise = projectsService.query();

			promise.then(function (res) {
				//Assert
				expect(res.data.length).toBe(fakeProjectList.length);
				done();
			});
			//closing request manually
			$httpBackend.flush();
		});



		it('should create project', function (done) {
			// Arrange
			var project = {
				name: 'TEST',
				description: 'TEST',
				targetIndustriesIds: [1, 2, 3]
			};
			$httpBackend.expectPOST(urls.mock('createProject')).respond({});

			// Act
			promise = projectsService.create(project);

			promise.then(function (res) {

				//Assert
				expect(res).toBeDefined();
				done();
			});

			$httpBackend.flush();
		});
	});
}());
