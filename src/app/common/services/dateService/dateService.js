(function () {
	'use strict';
	angular.module('app.common')
		.factory('dateService', dateService);

	function dateService() {
		return {
			now: now,
			getWeekDayNamesShort: getWeekDayNamesShort,
			getMonthNamesShort: getMonthNamesShort,
			parseDate: parseDate
		};

		///

		function now() {
			return new Date();
		}

		function getWeekDayNamesShort() {
			return ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
		}

		function getMonthNamesShort() {
			return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		}

		function parseDate(dateString) {
			if (!dateString) {
				return null;
			}

			var year, month, day, hours, minutes;
			year = parseInt(dateString.substring(0, 4), 10);
			month = parseInt(dateString.substring(5, 7), 10) - 1;
			day = parseInt(dateString.substring(8, 10), 10);
			hours = parseInt(dateString.substring(11, 13), 10);
			minutes = parseInt(dateString.substring(14, 16), 10);

			return new Date(year, month, day, hours, minutes);
		}
	}
}());
