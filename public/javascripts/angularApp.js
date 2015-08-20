var app = angular.module('feed', []);

app.config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);

app.factory('videos', ['$http', function($http){

var id = 'f9ae87ca10686aab84a7129dfd85c973'; 

var o = {videos: []

    };


function pullData(){
    
    $http.get("http://api.soundcloud.com/tracks/121056547?client_id=YOUR_CLIENT_ID").success(function(response){
    	console.log(response); 
    o.videos.push(response)
    });
    }

    pullData()   // call the function to pull data from the API

    
    return o; 

}])

	

app.controller('MainCtrl', ['$scope', 'videos',function($scope, videos){
$scope.videos = videos.videos; 
$scope.hello = 'hi'
}])