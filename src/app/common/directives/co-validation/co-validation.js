(function () {
	'use strict';

	angular
		.module('app')
		.directive('coValidation', coValidation);

	function coValidation() {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: link,
			scope: {
				coValidation: '&',
				coValidationType: '@'
			}
		};
	}

	function link(scope, element, attr, ngModel) {
		scope.$on('$destroy',
			scope.$watch(function () {
				return scope.coValidation();
			}, function (valid) {
				ngModel.$setValidity(scope.coValidationType, valid);
			})
		);
	}

}());
