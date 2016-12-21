(function () {
	'use strict';
	angular.module('app.common')
		.filter('coFullName', coFullName);

	function coFullName() {
		return function (person) {
			if (person) {
				var middleName = person.middleName ? person.middleName + ' ' : '';
				return person.firstName + ' ' + middleName + person.lastName;
			}
		};
	}
}());
