(function () {
	'use strict';

	var NewProjectPage = function () {
	};

	NewProjectPage.prototype.txtName = function () {
		return element(by.css('[data-test-name]'));
	};
	NewProjectPage.prototype.valNameRequired = function () {
		return element(by.css('[data-test-name-required]'));
	};
	NewProjectPage.prototype.valNameMaxLen = function () {
		return element(by.css('[data-test-name-maxlen]'));
	};

	NewProjectPage.prototype.txtDescription = function () {
		return element(by.css('[data-test-description]'));
	};
	NewProjectPage.prototype.valDescriptionRequired = function () {
		return element(by.css('[data-test-description-required]'));
	};
	NewProjectPage.prototype.valDescriptionMaxLen = function () {
		return element(by.css('[data-test-description-maxlen]'));
	};

	NewProjectPage.prototype.txtIndustries = function () {
		return element(by.css('[data-test-industries]'));
	};
	NewProjectPage.prototype.valIndustriesRequired = function () {
		return element(by.css('[data-test-industries-required]'));
	};
	NewProjectPage.prototype.industriesDropdownItems = function () {
		return element.all(by.css('[data-test-industry-dropdown-item]'));
	};
	NewProjectPage.prototype.btnIndustriesClear = function () {
		return element(by.css('[data-test-industries-clear]'));
	};
	NewProjectPage.prototype.industriesSelectedNames = function () {
		return element.all(by.css('[data-test-industry-selected-name]'));
	};
	NewProjectPage.prototype.industriesSelectedRemove = function () {
		return element.all(by.css('[data-test-industry-remove]'));
	};

	NewProjectPage.prototype.blurInput = function () {
		return element(by.css('[data-test-body]')).click();
	};


	NewProjectPage.prototype.btnCreate = function () {
		return element(by.css('[data-test-create]'));
	};

	module.exports = new NewProjectPage();
}());
