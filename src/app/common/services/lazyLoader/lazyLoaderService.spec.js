/// <reference path="../../testHelpers/_reference.js" />
/// <reference path="lazyLoaderService.js" />
(function () {
	'use strict';

	describe('lazyLoaderService', function () {
		beforeEach(module('app'));
		beforeEach(module('app.common'));
		beforeEach(module('ngMockE2E'));

		var lazyLoaderService,
			$document;

		beforeEach(inject(function (_lazyLoaderService_, _$document_) {
			lazyLoaderService = _lazyLoaderService_;
			$document = _$document_;
		}));

		it('should load components', function (done) {
			// Arrange
			var componentPath = 'https://cdnjs.cloudflare.com/ajax/libs/json2/20150503/json2.min.js';

			// Act
			lazyLoaderService.load(componentPath)
				.then(function () {
					// Assert
					var isLoaded = lazyLoaderService.checkLoaded(componentPath);
					expect(isLoaded).toBe(true);
					done();
				});
		});

		it('should NOT load the same component twice but get it from cache', function (done) {
			// Arrange
			var componentPath = 'https://cdnjs.cloudflare.com/ajax/libs/json2/20150503/json2.min.js',
				initialScriptsCount = $document.find('script').length;

			// Act
			lazyLoaderService.load(componentPath)
				.then(function () {
					// Assert
					expect($document.find('script').length).toBe(initialScriptsCount + 1);

					lazyLoaderService.load(componentPath).then(function () {
						// Assert
						expect($document.find('script').length).toBe(initialScriptsCount + 1);
						done();
					});
				});
		});
	});
}());
