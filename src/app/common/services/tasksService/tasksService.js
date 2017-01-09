(function () {
  'use strict';

  angular.module('app.common')
    .factory('tasksService', tasksService);

  function tasksService($resource, $http) {   
    return {
      query: query,
      save: save,
      update: update,
      deleteCategory: deleteCategory
    };

    function query(id) {
      return $http.get('/api/tasks/'+id);
    }

    function save(category) {
      return $http.post('/api/tasks', tasks);
    }

    function update(category) {
       return $http.put('/api/tasks', tasks);
    }

    function deleteCategory(id) {
      return $http.delete('/api/tasks/'+id);
    }
  }
}());
