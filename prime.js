angular.module('isItPrimeApp', [])
  .controller('PrimeCtrl', ['$scope', function ($scope) {
    $scope.calcPrime = function (num) {
      for (var i = Math.floor(num / 2); i > 1; i -= 2) {
        if (!(num % i)) {
          var msg = "NOT";
          $scope.msg = msg;
          return false;
        }
      }
      return true;
    };
  }])

