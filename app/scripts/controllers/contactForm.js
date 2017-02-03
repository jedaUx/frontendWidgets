'use strict';

angular.module('frontDirectives')
  .controller('contactFormCtrl', [ '$scope', '$http', function ($scope, $http) {
    $scope.userContact = {};

    $http.get('/datamodel/userContacts.json').then(function(response) {
      if(response.data.result){
        $scope.userContact = response.data.user;
      }else{
        $scope.userContact = {};
      }
    });

    $scope.addContacts = {
      templateUrl: '/widgets/selectContact.html',
      contactList: $scope.userContact.contacts
    };
  }]);
