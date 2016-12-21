(function () {
  'use strict';

  angular
    .module('app')
    .run(run);

  function run($rootScope) {

    $rootScope.$on('$destroy',
      $rootScope.$on('$stateChangeStart', function (e, toState, toStateParams) {

      }));
  }
}());
