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
      .state('shell.category', {
        url: '/category',
        templateUrl: 'app/pages/category/category.html',
        controller: 'categoryCtrl',
        controllerAs: 'vm',
        title: 'Category List'
      });
    $urlRouterProvider.otherwise('/projects');
  }
}());
