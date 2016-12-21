///**
// * This file uses the Page Object pattern to define the main page for tests
// * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
// */
(function () {
	'use strict';

	var ProjectsPage = function () {
	};

	ProjectsPage.prototype.projectsList = function () {
		return element.all(by.css('[data-test-projectid]'));
	};

	ProjectsPage.prototype.getProjectById = function (id) {
		return element(by.css('[data-test-projectid="' + id + '"]'));
	};

	ProjectsPage.prototype.getProjectId = function (project) {
		return project.getAttribute('data-test-projectid');
	};

	ProjectsPage.prototype.getProjectName = function (project) {
		return project.element(by.css('[data-test-projectname]')).getText();
	};

	ProjectsPage.prototype.newProjectBtn = function () {
		return element(by.css('[data-test-newproject]'));
	};

	ProjectsPage.prototype.expertsCounts = function () {
		return element.all(by.css('[data-test-expertcount]'));
	};

	module.exports = new ProjectsPage();
}());
