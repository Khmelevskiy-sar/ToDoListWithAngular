/// <reference path="../../../testHelpers/_reference.js" />

/// <reference path="co-validation.js" />
(function () {
	'use strict';

	describe('coValidation', function () {
		beforeEach(module('app'));
		beforeEach(module('app.common'));
		beforeEach(module('ngMockE2E'));

		var scope,
			element,
			isValid;

		beforeEach(inject(function ($rootScope, $compile) {
			var html = '<form><input ng-model="model" co-validation="validateFn()" co-validation-type="type1" /></form>';
			scope = $rootScope.$new();
			scope.validateFn = function () {
				return isValid;
			};

			element = $compile(html)(scope);
		}));

		it('should NOT set invalid state for input if validation function returns true', function () {
			// Arrange
			isValid = true;
			scope.$digest();

			// Assert
			expect(element.hasClass('ng-valid')).toBe(true);
			expect(element.hasClass('ng-invalid')).toBe(false);
			expect(element.find('input').hasClass('ng-valid')).toBe(true);
			expect(element.find('input').hasClass('ng-invalid')).toBe(false);
		});

		it('should set invalid state for input if validation function returns false and set proper invalid type class', function () {
			// Arrange
			isValid = false;
			scope.$digest();

			// Assert
			expect(element.hasClass('ng-valid')).toBe(false);
			expect(element.hasClass('ng-invalid')).toBe(true);
			expect(element.hasClass('ng-invalid-type1')).toBe(true);
			expect(element.find('input').hasClass('ng-valid')).toBe(false);
			expect(element.find('input').hasClass('ng-invalid')).toBe(true);
			expect(element.find('input').hasClass('ng-invalid-type1')).toBe(true);
		});
	});
}());
