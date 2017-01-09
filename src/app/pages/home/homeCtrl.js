(function () {
  'use strict';

  angular.module('app')
    .controller('homeCtrl', homeCtrl);

  function homeCtrl($scope, categoryService, tasksService) {
    var vm = this;

    vm.category;
    vm.tasks = [];
    vm.curentCategoryId = null;
    vm.addCategory = _addCategory;
    vm.deleteCategory = _deleteCategory;
    vm.getTasks = _getTasks;
    vm.updateCategory = _updateCategory;
    vm.addTask = _addTask;

    _getCategory();

    function _addTask(idOwner, name) {
      console.log(idOwner, name);
      tasksService.save({
        idOwner: idOwner,
        name: name
      });
      _getTasks(idOwner);
    }

    function _getTasks(id) {
      vm.curentCategoryId = id;
      tasksService.query(id).then(function (res) {
        vm.tasks = res.data;
      });
    }

    function _addCategory(id, name) {
      categoryService.save({
        id: id,
        name: name
      });
      _getCategory();
    }

    function _deleteCategory(id) {
      categoryService.deleteCategory({
        id: id
      });
      _getCategory();
    }

    function _updateCategory(id, name) {
      categoryService.update({
        id: id,
        name: name
      });
    }

    function _getCategory() {
      categoryService.query()
        .then(function (res) {
          vm.category = res.data;
        });
    }
  }
}());
