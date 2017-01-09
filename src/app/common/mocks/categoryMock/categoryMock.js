(function () {
  'use strict';
  angular
    .module('app.backend')
    .run(categoryMock);

  function categoryMock($httpBackend) {
    var _category = [{
        id: '1',
        name: 'Category-1',
        subCategory: [{
          id: '11',
          name: 'Category-1-1',
          subCategory: []
        }, {
          id: '12',
          name: 'Category-1-2',
          subCategory: []
        }]
      }, {
        id: '2',
        name: 'Category-2',
        subCategory: [{
          id: '21',
          name: 'Category-2-1',
          subCategory: []
        }]
      }],
      nextId = 3;


    $httpBackend.whenGET(/api\/category$/)
      .respond(function () {
        return [200, _category];
      });

    $httpBackend.whenDELETE(/api\/category\/(\d+)$/)
      .respond(function (method, url, data, headers) {
        var id = url.match(/(\d+)/)[0],
          res;
        res = deleteCategory(id);
        if (!res) {
          return [404, {}];
        }
        return [204, {}];
      });

    $httpBackend.whenPUT(/api\/category$/)
      .respond(function (method, url, data, headers) {
        var dataForCreate = angular.fromJson(data),
          name = dataForCreate.name,
          id = dataForCreate.id,
          res;

        res = updateCategory(id, name);
        if (!res) {
          return [404, undefined];
        }
        return [200];
      });

    $httpBackend.whenPOST(/api\/category$/)
      .respond(function (method, url, data, headers) {
        var dataForCreate = angular.fromJson(data),
          id = dataForCreate.id,
          name = dataForCreate.name,
          res;

        res = addCategory(id, name);
        if (res) {
          return [201];
        }
        return [500];
      });


    function getCategory() {
      return _category;
    }

    function addCategory(id, name) {
      console.log(id, name)
      if (id === null) {
        return !!_category.push(_createNewCategory(name));
      } else {
        var curentCategory = findCategory(id),
          nameNewCategory = curentCategory.name + '-' + (curentCategory.subCategory.length + 1);
        return !!curentCategory.subCategory.push(_createNewCategory(nameNewCategory)) //TODO refactoring
      }
    }

    function deleteCategory(id) {     
      if (angular.isUndefined(id)) {        
        return false;
      } else {    
        _deleteCategory(_category, id);
        return true;
      }
    }

    function _deleteCategory(category, id) {
      var item, i, l;
      for (i = 0, l = category.length; i < l; i += 1) {        
        item = category[i];
        if (item.id == id) {         
          category.splice(i, 1);
          return true;
        }
        if (item.subCategory.length > 0) {
          if (_deleteCategory(item.subCategory, id)) {
            return true;
          }
        }
      }
      return false;
    }

    function updateCategory(id, newName) {
      if (angular.isUndefined(id)) {
        return false;
      } else {
        var curentCategory = findCategory(id);
        curentCategory.name = newName; //TODO refactoring
        return true;
      }
    }

    function _createNewCategory(name) {
      var newCategory = {
        id: nextId,
        name: name,
        subCategory: [],
        tasks: []
      };

      nextId++;
      return newCategory;
    }

    function findCategory(id) {
      return _findCategory(_category, id);
    }

    function _findCategory(category, id) {
      var i, l, item;
      for (i = 0, l = category.length; i < l; i += 1) {
        item = category[i]
        if (item.id === id) {
          return item;
        }
        if (item.subCategory.length > 0) {
          if (item = _findCategory(item.subCategory, id)) {
            return item;
          }
        }
      }
    }
  }
}());
