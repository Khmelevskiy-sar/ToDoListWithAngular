(function () {
	'use strict';
	angular.module('app.common')
		.service('lazyLoaderService', function ($rootScope, $q, $document) {

			var componentsLoaded = [];

			return {
				load: load,
				checkLoaded: checkLoaded
			};

			///

			function load(componentPath) {
				var script,
					doc = $document[0],
					deferred;

				deferred = $q.defer();

				if (componentsLoaded.indexOf(componentPath) >= 0) {
					deferred.resolve();
					return deferred.promise;
				}

				script = doc.createElement('script');
				script.src = componentPath;
				script.onload = function () {
					componentsLoaded.push(componentPath);
					$rootScope.$apply(deferred.resolve);
				};
				doc.getElementsByTagName('head')[0].appendChild(script);

				return deferred.promise;
			}

			function checkLoaded(name) {
				return componentsLoaded.indexOf(name) >= 0;
			}

		});
}());
