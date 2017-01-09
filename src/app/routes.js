(function () {
  'use strict';

  angular
    .module('app')
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('shell', {
        url: '',
        abstract: true,
        controller: 'shellCtrl',
        controllerAs: 'vm',
        templateUrl: 'app/pages/shell.html'
      })
      .state('shell.home', {
        url: '/home',
        templateUrl: 'app/pages/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm',
        title: 'Home'
      });
    $urlRouterProvider.otherwise('/home');
  }
}());
