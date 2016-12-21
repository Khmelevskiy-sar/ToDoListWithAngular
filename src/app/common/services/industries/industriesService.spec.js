/// <reference path="../../testHelpers/_reference.js" />
/// <reference path="industriesService.js" />
/// <reference path="industriesService.mock.js" />

(function () {
	'use strict';

	describe('industriesService', function () {
		beforeEach(module('app'));
		beforeEach(module('app.common'));
		beforeEach(module('ngMockE2E'));

		var industriesService,
			$httpBackend,
			urls,
			fakeIndustriesList,
			promise;

		beforeEach(inject(function (_$httpBackend_, _industriesService_, _urls_) {
			$httpBackend = _$httpBackend_;
			industriesService = _industriesService_;
			urls = _urls_;

			fakeIndustriesList = [
				{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
			];
		}));

		it('should search industries by term', function (done) {
			// Arrange
			$httpBackend.expectGET(urls.mock('searchIndustriesByTerm')).respond(angular.toJson(fakeIndustriesList));

			// Act
			promise = industriesService.searchIndustriesByTerm('Healthcare');

			promise.then(function (res) {
				//Assert
				expect(res.data.length).toBe(7);
				done();
			});

			$httpBackend.flush();
		});
	});
}());
