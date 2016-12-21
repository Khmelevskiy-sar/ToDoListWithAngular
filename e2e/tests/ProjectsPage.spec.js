(function () {
	'use strict';

	describe('Projects page', function () {
		var utils,
			projectsPage;

		beforeEach(function (done) {
			utils = require('../utils');
			projectsPage = require('../pageObjects/ProjectsPage');

			browser.ignoreSynchronization = false;

			utils.goToUrl('/projects').then(done);
		});

		describe('check page is loaded correctly', function () {

			it('should load projects list', function () {
				expect(projectsPage.projectsList().count()).toBeGreaterThan(0);
			});

		});

		describe('clickable elements', function () {

			it('should redirect to new project page on "New Project" button click', function (done) {
				projectsPage.newProjectBtn().click();
				utils.waitForUrlToChangeTo(utils.baseUrl + '/newProject').then(function () {
					done();
				});
			});

		});

	});
}());
