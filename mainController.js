angular.module('gunnarApp')

.controller('mainCtrl', function($scope, mainService){
    
    $scope.myName = {
        mySuperName : 'Batman'
    }
    
    //Inject mainService above and then call the function on the service.
    $scope.data = mainService.getData();

    var data = [1,2,3]; //View does not have access to this.

    //Anything on $scope, the view will have access to.
});