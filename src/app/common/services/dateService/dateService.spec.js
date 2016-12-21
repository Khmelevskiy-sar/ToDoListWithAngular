/// <reference path="../../testHelpers/_reference.js" />
/// <reference path="dateService.js" />
(function () {
	'use strict';

	describe('dateService', function () {
		beforeEach(module('app'));
		beforeEach(module('app.common'));
		beforeEach(module('ngMockE2E'));

		var dateService;

		beforeEach(inject(function (_dateService_) {
			dateService = _dateService_;
		}));

		it('should return current date', function () {
			//Assert
			expect(dateService.now() instanceof Date).toBe(true);
		});

		it('should return short week day names array', function () {
			//Assert
			expect(dateService.getWeekDayNamesShort().length).toBe(7);
		});

		it('should return short month names array', function () {
			//Assert
			expect(dateService.getMonthNamesShort().length).toBe(12);
		});

		//it('should parse date ignoring timezone', function () {
		//	var dateString = '2015-07-20T11:00:00-01:00',
		//		dateStringIgnoredTZ = '2015-07-20T11:00:00+03:00';

		//	//Assert
		//	expect(dateService.parseDate(dateString)).toEqual(new Date(dateStringIgnoredTZ));
		//});
	});
}());
