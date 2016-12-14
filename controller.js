angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.currentPage = 1;

  $scope.getUsers = function() {
    var promise = mainService.getUsers($scope.currentPage)

    promise.then(function (people) {
      $scope.users = people;
    });
  }
  $scope.getUsers();

  $scope.prev = function () {
    if ($scope.currentPage > 1) {
      $scope.currentPage--;
      $scope.getUsers();
    }

  }
  $scope.next = function () {
    $scope.currentPage++;
    $scope.getUsers();

  }

});
