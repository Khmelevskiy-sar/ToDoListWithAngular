/// <reference path="../testHelpers/_reference.js" />
/// <reference path="shellCtrl.js" />
(function () {
	'use strict';

	describe('shellCtrl', function () {
		beforeEach(module('app'));
		beforeEach(module('app.common'));
		beforeEach(module('ngMockE2E'));

		var vm,
			$scope,
			locationChangeStartCallback;

		beforeEach(inject(function ($controller) {
			$scope = {
				$on: function (name, cb) {
					if (name !== '$destroy') {
						locationChangeStartCallback = cb;
					}
				}
			};

			vm = $controller('shellCtrl', {
				$scope: $scope
			});
		}));

		it('should propperly initialize', function () {
			// Assert
			expect(vm).toBeDefined();
			expect(vm.menuIsOpen).toBe(false);
			expect(vm.toggleMenu).toBeDefined();
		});

		it('should close menu', function () {
			// Act
			vm.toggleMenu();
			expect(vm.menuIsOpen).toBe(true);

			// Act
			vm.toggleMenu();
			expect(vm.menuIsOpen).toBe(false);
		});

		it('should toggle menu on locationChangeStart (page redirect)', function () {
			// Arrange
			vm.toggleMenu();

			// Act
			locationChangeStartCallback();

			// Assert
			expect(vm.menuIsOpen).toBe(false);
		});

	});

}());
