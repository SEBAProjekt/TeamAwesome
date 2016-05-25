/**
 * Created by nicol on 25.05.2016.
 */
var  app = angularModule("GoOutSmart", [])

app.controller("HomeController", function($scope, $http){
    $scope.message = "Hallo Angular";
//    $http.get("http://localhost:63342/Contact").success(function (response) {
//        $scope.contacts = response;
//    }).error(function (err) {
//        $scope.error = err;
//    });
});
