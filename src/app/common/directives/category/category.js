(function () {
  'use strict';

  angular.module('app')
    .directive('myCategory', myCategory);

  function myCategory() {
    return {
      restrict: 'E',
      scope: {
        category: '=',
        onCategorySelect: '&',
        updateCategory: '&',
        addCategory: '&',
        addSubcategory: '&',
        deleteCategory: '&'
      },
      templateUrl: 'app/common/directives/category/category.html',
      controllerAs: 'vm',
      controller: CategoryCtrl
    };

    function CategoryCtrl($scope) {
      var vm = this;

      vm.toggle = true;
      vm.newName = '';
      vm.nameNewCategory = null;
      vm.editedCategory = null;
      vm.demonstratedData = null;

      vm.addCategory = _addCategory;
      vm.addSubcategory = _addSubcategory;
      vm.changeCurentCategory = _changeCurentCategory;
      vm.delete = _delete;
      vm.showNameInput = _showNameInput;
      vm.showSubcategory = _showSubcategory;
      vm.update = _update;

      function _delete(id) {        
        $scope.deleteCategory({
          id: id
        });        
      };

      function _changeCurentCategory(id) {
        $scope.onCategorySelect({
          id: id
        });
      };

      function _update(id, name) {
        $scope.updateCategory({
          id: id,
          name: name
        })
        vm.editedCategory = null;
      };

      function _showNameInput(data) {
        vm.editedCategory = data;
      };

      function _addCategory() {
        $scope.addCategory({
          id: null,
          name: vm.nameNewCategory
        })
        vm.nameNewCategory = null;
      };

      function _addSubcategory(id) {
        $scope.addSubcategory({
          id: id,
          name: null
        })
      };

      function _showSubcategory(data) {
        if (vm.demonstratedData === data) {
          vm.demonstratedData = null
        } else {
          vm.demonstratedData = data;
        }
      }
    }
  }
}());
