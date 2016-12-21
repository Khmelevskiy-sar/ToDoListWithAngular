
/// <reference path="../../../testHelpers/_reference.js" />

/// <reference path="coFullName.js" />

(function () {
	'use strict';

	describe('coFullName', function () {
		beforeEach(module('app'));
		beforeEach(module('app.common'));
		beforeEach(module('ngMockE2E'));

		var coFullName;

		beforeEach(inject(function ($filter) {
			coFullName = $filter('coFullName');
		}));

		it('should be correctly created', function () {
			expect(coFullName).toBeDefined();
		});

		it('should correctly combine firstName and lastName from the object', function () {
			// Arrange
			var user = {
				firstName: 'Mikhail',
				lastName: 'Kuznetsov'
			};

			// Assert
			expect(coFullName(user)).toEqual(user.firstName + ' ' + user.lastName);
		});

		it('should correctly combine firstName and lastName and optional middleName', function () {
			var user = {
				firstName: 'Mikhail',
				lastName: 'Kuznetsov',
				middleName: 'Viktorovich'
			};
			expect(coFullName(user)).toEqual(user.firstName + ' ' + user.middleName + ' ' + user.lastName);
		});

		it('should return nothing if user is incorrect', function () {
			var user = null;
			expect(coFullName(user)).toEqual(undefined);
		});
	});
}());
