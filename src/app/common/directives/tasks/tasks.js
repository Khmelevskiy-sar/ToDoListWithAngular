(function () {
  'use strict';

  angular.module('app')
    .directive('myTasks', myTasks);

  function myTasks() {
    return {
      restrict: 'E',
      scope: {
        addTask: '&',
        curentCategoryId: '=',
        openTaskEditer: '&',
        tasks: '=',
        update: '&'
      },
      templateUrl: 'app/common/directives/tasks/tasks.html',
      controllerAs: 'vm',
      controller: TasksCtrl
    };

    function TasksCtrl($scope) {
      var vm = this;

      vm.editTask = null;
      vm.toggle = false;
      vm.newName = '';

      vm.openTaskEditer = _openTaskEditer;
      vm.update = _update;
      vm.addTask = _addTask;

      function _openTaskEditer(task) {
        vm.toggle = !vm.toggle;
        vm.editTask = task;
        $scope.openTaskEditer({
          
        });
      };

      function _update(task) {
        $scope.update({
          task: task
        });
      };

      function _addTask() {
        console.log(vm.newName, curentCategoryId);
        $scope.addTask({
          name: vm.newName,
          idOwner: curentCategoryId
        });
      };
    }
  }
}());
