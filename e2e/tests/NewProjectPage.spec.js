(function () {
	'use strict';

	describe('New Project page', function () {
		var utils,
			newProjectPage;

		beforeAll(function (done) {
			utils = require('../utils');
			newProjectPage = require('../pageObjects/NewProjectPage');

			// Navigate to the page
			goToCreateProjectPage(done);
		});

		// ----------------------------------------

		describe('Page state on load', function () {

			it('should show empty Name, Description, Industries fields on load', function () {
				expect(newProjectPage.txtName().getText()).toBe('');
				expect(newProjectPage.txtDescription().getText()).toBe('');
				expect(newProjectPage.txtIndustries().getText()).toBe('');
			});

			it('should show required validator label for Name, Description, Industries fields on load', function () {
				expect(newProjectPage.valNameRequired().isPresent()).toBe(true);
				expect(newProjectPage.valDescriptionRequired().isPresent()).toBe(true);
				expect(newProjectPage.valIndustriesRequired().isPresent()).toBe(true);
			});

			it('should not show max length validator labels for empty Name, Description fields', function () {
				expect(newProjectPage.valNameMaxLen().isPresent()).toBe(false);
				expect(newProjectPage.valDescriptionMaxLen().isPresent()).toBe(false);
			});

			it('should show disabled Create Project button on load', function () {
				expect(newProjectPage.btnCreate().isEnabled()).toBe(false);
			});

		});

		// ----------------------------------------

		describe('Fields validation', function () {
			it('should hide required label after some text input in Name field', function () {
				newProjectPage.txtName().sendKeys('A');
				newProjectPage.blurInput().then(function () {
					newProjectPage.valNameRequired().isPresent().then(function (isPresent) {
						expect(isPresent).toBe(false);
					});
				});
			});

			it('should show max length label if more then 150 symbols input in Name field', function () {
				var longText = new Array(150 + 2).join('a');
				browser.executeScript('var s = $("[data-test-name]").scope();' +
					's.vm.project.name="' + longText + '";' +
					's.$digest();')
					.then(function () {
						expect(newProjectPage.valNameMaxLen().isPresent()).toBe(true);
					});
			});

			it('should hide required label after some text input in Description field', function () {
				newProjectPage.txtDescription().sendKeys('A');
				newProjectPage.blurInput().then(function () {
					newProjectPage.valDescriptionRequired().isPresent().then(function (isPresent) {
						expect(isPresent).toBe(false);
					});
				});
			});

			it('should show max length label if more then 4000 symbols input in Description field', function () {
				var longText = new Array(4000 + 2).join('a');
				browser.executeScript('var s = $("[data-test-description]").scope();' +
					's.vm.project.description="' + longText + '";' +
					's.$digest();')
					.then(function () {
						expect(newProjectPage.valDescriptionMaxLen().isPresent()).toBe(true);
					});
			});

			it('should not hide required label after some text input in Industries field', function () {
				newProjectPage.txtIndustries().sendKeys('A');
				expect(newProjectPage.valIndustriesRequired().isPresent()).toBe(true);
			});

		});

		// ----------------------------------------

		describe('Industries selection logic', function () {

			beforeEach(function (done) {
				// Clear Industries textbox before each test
				newProjectPage.txtIndustries().clear().then(done);
			});

			it('should not show Industries dropdown on less then 3 symbols input', function () {
				newProjectPage.txtIndustries().sendKeys('He'); // only 2 symbols
				expect(newProjectPage.industriesDropdownItems().count()).toBe(0);
			});

			it('should show Industries dropdown on 3 symbols input', function (done) {
				typeIndustriesSearchTermWaitDropdownAppears()
					.then(function () {
						// 7 items from test data set
						expect(newProjectPage.industriesDropdownItems().count()).toBe(7);
						done();
					});
			});

			it('should show Industries clear icon on any input', function (done) {
				newProjectPage.txtIndustries().sendKeys('A');
				browser.executeScript('$("[data-test-body]").scope().$digest();');
				utils.wait(function () {
					return newProjectPage.btnIndustriesClear().isPresent();
				})
				.then(done);
			});

			it('should clear Industries textbox and hide dropdown when Clear icon is clicked', function () {
				newProjectPage.txtIndustries().sendKeys('Hea');

				newProjectPage.btnIndustriesClear().click();
				expect(newProjectPage.txtIndustries().getText()).toBe('');
				expect(newProjectPage.industriesDropdownItems().count()).toBe(0);
			});

			it('should show name and description for industries dropdown items', function (done) {
				typeIndustriesSearchTermWaitDropdownAppears()
					.then(function () {
						var firstDropdownItem = newProjectPage.industriesDropdownItems().get(0);
						expect(firstDropdownItem.element(by.css('[data-test-industry-name]')).getText()).not.toBe('');
						expect(firstDropdownItem.element(by.css('[data-test-industry-description]')).getText()).not.toBe('');
						done();
					});
			});

			it('should add Industry (with correct name, description text) to the list of selected when it clicked', function (done) {
				typeIndustriesSearchTermWaitDropdownAppears()
					.then(function () {
						var firstDropdownItem = newProjectPage.industriesDropdownItems().get(0);
						firstDropdownItem.element(by.css('[data-test-industry-name]')).getText().then(function (firstDropDownItemName) {

							// Select first item
							firstDropdownItem.click();

							expect(newProjectPage.txtIndustries().getText()).toBe('');
							expect(newProjectPage.btnIndustriesClear().isPresent()).toBe(false);
							expect(newProjectPage.industriesSelectedNames().count()).toBe(1);
							expect(newProjectPage.industriesSelectedNames().get(0).getText()).toBe(firstDropDownItemName);

							done();
						});
					});
			});

			it('should hide Industries required validation label when at least one industry is selected', function (done) {
				typeIndustriesSearchTermWaitDropdownAppears()
					.then(function () {
						var firstDropdownItem = newProjectPage.industriesDropdownItems().get(0);
						return firstDropdownItem.click();
					})
					.then(function () {
						expect(newProjectPage.valIndustriesRequired().isPresent()).toBe(false);
						done();
					});
			});

			it('should not add the same Industry twice', function (done) {
				typeIndustriesSearchTermWaitDropdownAppears()
					.then(function () {
						var firstDropdownItem = newProjectPage.industriesDropdownItems().get(0);
						firstDropdownItem.click();

						typeIndustriesSearchTermWaitDropdownAppears();

						firstDropdownItem = newProjectPage.industriesDropdownItems().get(0);
						firstDropdownItem.click();

						expect(newProjectPage.industriesSelectedNames().count()).toBe(1);
						done();
					});
			});

			it('should add the second Industry to top of the list when it is clicked', function (done) {
				typeIndustriesSearchTermWaitDropdownAppears()
					.then(function () {
						var firstDropdownItem = newProjectPage.industriesDropdownItems().get(0);
						firstDropdownItem.click();

						typeIndustriesSearchTermWaitDropdownAppears(newProjectPage);

						var secondDropdownItem = newProjectPage.industriesDropdownItems().get(1);
						secondDropdownItem.element(by.css('[data-test-industry-name]')).getText()
							.then(function (secondDropdownItemText) {

								secondDropdownItem.click();

								// should be 2 selected industries in the list
								expect(newProjectPage.industriesSelectedNames().count()).toBe(2);

								// expect last selected item set to the top of the list
								expect(newProjectPage.industriesSelectedNames().get(0).getText()).toBe(secondDropdownItemText);

								done();
							});
					});
			});

			it('should remove Industry from the list when Remove icon is clicked', function () {
				newProjectPage.industriesSelectedRemove().get(0).click();
				expect(newProjectPage.industriesSelectedNames().count()).toBe(1);
			});

		});

		//// ----------------------------------------

		describe('Create project', function () {
			beforeEach(function (done) {
				goToCreateProjectPage(done);
			});

			it('should enable Create Project button when Name, Description and Industries are specified', function (done) {
				correctlyFillProjectFields()
					.then(function () {
						expect(newProjectPage.btnCreate().isEnabled()).toBe(true);
						done();
					});
			});

			it('should create project when Create button is clicked. ' +
				'Then show success message and redirect to Projects List page', function (done) {
					correctlyFillProjectFields()
						.then(function () {

							// Click create project
							newProjectPage.btnCreate().click();

							utils.waitForUrlToChangeTo(utils.baseUrl + '/projects').then(function () {
								done();
							});
						});
				});

		});


		// ----------------------------------------
		// Helper Functions
		// ----------------------------------------

		function goToCreateProjectPage(done) {
			utils.goToUrl('/newProject').then(done);
		}

		function typeIndustriesSearchTermWaitDropdownAppears() {
			newProjectPage.txtIndustries().sendKeys('Health');

			return utils.wait(function () {
				return newProjectPage.industriesDropdownItems().count().then(function (c) {
					return c > 0;
				});
			});
		}

		function correctlyFillProjectFields() {
			newProjectPage.txtName().sendKeys('A');
			newProjectPage.txtDescription().sendKeys('A');
			return typeIndustriesSearchTermWaitDropdownAppears(newProjectPage)
				.then(function () {
					return newProjectPage.industriesDropdownItems().get(0).click();
				});
		}

	});
}());
