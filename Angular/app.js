var angular=require("angular")
var ngRoute=require("angular-route");
var app=angular.module("mainApp",["ngRoute"])

app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
            
    $routeProvider
        .when("/about",{
            templateUrl:'../src/About/about.html',
            controller:'firstCtrl'
        })

        .otherwise({
             redirectTo: '/home'
          });
    $locationProvider.html5Mode(true);
    }])

app.controller("HeaderController",['$scope',"$location",function($scope,$location){
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}])
