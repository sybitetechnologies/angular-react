var angular=require("angular");
var app=angular.module("mainApp")


app.controller("contactCtrl",["$scope", "$http",function($scope,$http){
    $http({
        method:"GET",
        url: "/user"
    }).then(function mySucces(response) {
        console.log(response.data)
        $scope.user=response.data
    })
 $scope.postMethod=function(user){
    console.log(JSON.stringify(user))
    $http({
        method:"POST",
        url: "/postu",
        data: JSON.stringify(user),
        contentType: 'application/json',
        dataType:'json'
    }).then(function mySucces(response) {
        
    })
    }

}])
