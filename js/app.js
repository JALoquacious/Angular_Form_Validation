var app = angular.module('main', []);

app.controller('RegistrationController', ['$scope', function ($scope) {
    $scope.register = function () {
        $scope.message = 'Login successful, ' + $scope.user.firstName + '.';
    };
}]);
