(function () {
  'use strict';
  angular
    .module('app.backend')
    .run(tasksMock);

  function tasksMock($httpBackend) {
    var tasks = [{
        id: '1',
        name: 'task1',
        implementations: false,
        ownerId: 1
      }, {
        id: '2',
        name: 'task2',
        implementations: true,
        ownerId: 1
      }, {
        id: '3',
        name: 'task3',
        implementations: false,
        ownerId: 2
      }],
      nextId = 4;

    $httpBackend.whenGET(/api\/tasks\/(\d+)$/)
      .respond(function (method, url, data, headers) {
        var idOwner = url.match(/(\d+)/)[0],
          res;
        res = _getByOwnerId(idOwner);
        return [200, res];
      });

    $httpBackend.whenPUT(/api\/tasks$/)
      .respond(function (method, url, data, headers) {
        var task = angular.fromJson(data),

          res = _update(task);
        return [200, res];
      });


    $httpBackend.whenDELETE(/api\/tasks\/(\d+)$/)
      .respond(function (method, url, data, headers) {
        var id = url.match(/(\d+)/)[0],
          res;
        res = _delete(id);
        if (!res) {
          return [404, {}];
        }
        return [204, {}];
      });

    $httpBackend.whenPOST(/api\/tasks$/)
      .respond(function (method, url, data, headers) {
        var data = angular.fromJson(data),
          res;

        res = _add(data.idOwner, data.name);
        if (res) {
          return [201];
        }
        return [500];
      });

    function _getByOwnerId(idOwner) {
      var array = _.filter(tasks, function (o) {
        return o.ownerId == idOwner;
      });
      return array;
    }

    function _add(idOwner, name) {
      var newTask = _createNewTask(idOwner, name);

      tasks.push(task);
    };

    function _delete(id) {
      tasks = _.filter(tasks, function (o) {
        return o.id != id;
      });
      return true;
    };

    function _update(task) {
      var index = _.findIndex(tasks, function (o) {
        return o.id == task.id;
      });

      if (index === -1) {
        return [404, undefined]
      } else {
        tasks[index] = task;
        return [200]
      }
    };

    function _createNewTask(idOwner, name) {
      var newTask = {
        id: nextId,
        name: name,
        implementations: false,
        ownerId: idOwner
      };

      nextId++;
      return newTask;
    }
  }
}());
