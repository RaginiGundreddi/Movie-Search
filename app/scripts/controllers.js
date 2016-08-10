'use strict';

angular.module('movieApp')
.controller('movieController',['$scope','movieService',function($scope,movieService){
    

$scope.moviename="";
     $scope.showDetails = false;
     $scope.startSearch = false;
            $scope.message="Loading ...";

            $scope.hints = [];



            $scope.movies="";    
                
            $scope.searchdb=movieService.getSummary;


            $scope.startSearch = function($event){
                    
                    var keyPressed = $event.which || $event.keyCode;
                      
                      if (keyPressed === 13) {

                        $scope.searching();
                         
                }

              };

            $scope.hinting=function(){

                $scope.searchdb().get({s:$scope.moviename})
            .$promise.then(
            
                            function(response){

                                var temp=angular.fromJson(response.Search);

                                if(!angular.isUndefined(temp)){

                                    for(var i = 0; i < temp.length; i++) {
                                       
                                       var obj = response.Search[i];

                                         $scope.hints.push(obj.Title);
                                    }
                                    
                                }
                                
                                

                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }

            );
            


            };
  
  $scope.searching=function(){
    $scope.showSearch=true;
 $scope.searchdb().get({s:$scope.moviename})
            .$promise.then(
            
                            function(response){

                                $scope.movies= angular.fromJson(response.Search);
                                $scope.showDetails = true;
                                

                            },
                            function(response) {
                                $scope.message = "Error: "+response.status + " " + response.statusText;
                            }

            );

            

            };

            


    
}])

;