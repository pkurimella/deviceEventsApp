angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope,$ionicPlatform) {

    $ionicPlatform.ready(function () {
      $scope.deviceInfo = window.device;
      $scope.navigatorInfo = window.navigator;
      $scope.$apply();
    });
  });