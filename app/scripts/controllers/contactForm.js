'use strict';

angular.module('frontDirectives')
  .controller('contactFormCtrl', [ '$scope', '$http', function ($scope, $http) {
    $scope.userContact = {};
    $scope.alerts = [];
    $scope.msg = {};
    var successAlert = { type: 'success', msg: 'Thanks for contact us!' };

    $scope.loadItems = function () {
      return $http.get('/datamodel/userContacts.json');
    };

    $scope.closeAlert = function(ind){
      $scope.alerts.splice(ind, 1);
    };

    $scope.canSave = function () {
      var save = $scope.msg.name !== undefined && $scope.msg.subject !== undefined && $scope.msg.message !== undefined;

      if(save){
        save = !($scope.msg.name.length === 0 && $scope.msg.subject.length === 0 && $scope.msg.message.length === 0);
      }

      return save;
    };

    $scope.submit = function(){
      // Do something
      $scope.alerts.push(successAlert);
      // Clean form
      $scope.msg = {};

    };

  }]);
