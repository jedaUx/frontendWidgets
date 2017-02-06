'use strict';

angular.module('frontDirectives')

  .controller('contactProfileCtrl', [ '$scope', '$http', function ($scope, $http) {
    $http.get('/datamodel/userData.json').then(function(response) {
      if(response.data.result){
        $scope.userData = response.data.user;
      }else{
        $scope.userData = {};
      }
    });


  }]);
