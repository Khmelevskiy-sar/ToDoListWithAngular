(function () {
  'use strict';

  angular.module('app.common')
    .factory('categoryService', categoryService);

  function categoryService($resource, $http) {   
    return {
      query: query,
      save: save,
      update: update,
      deleteCategory: deleteCategory
    };

    function query() {
      return $http.get('/api/category');
    }

    function save(category) {
      return $http.post('/api/category', category);
    }

    function update(category) {
       return $http.put('/api/category', category);
    }

    function deleteCategory(id) {
      return $http.delete('/api/category/'+id.id);
    }
  }
}());
