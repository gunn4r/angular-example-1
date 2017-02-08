angular.module('gunnarApp')

.service('mainService', function($http){
    var data = [
        'Name1', 'Name2', 'Name3'
    ];

    this.getData = function(){
        return data;
    }
    
});