'use strict';

angular.module('frontDirectives')
  .controller('datatransfer-reportCtrl', [ '$scope', '$http', function ($scope, $http) {
    $scope.userData = {};
    $scope.colors = [
      '#4DAF7B',
      '#E55F3B',
      '#5E90AF',
      '#F3ECE6'
    ];
    $http.get('/datamodel/userDataTransfer.json').then(function(response) {
      if(response.data.result){
        $scope.userData = response.data.user;
        $scope.datatransferStats = $scope.userData.datatypes.map(function(dt) {return dt.percentage;});
        $scope.labels = $scope.userData.datatypes.map(function(dt) {return dt.type;});
      }else{
        $scope.userData = {};
      }
    });
  }]);
