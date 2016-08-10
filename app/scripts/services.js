'use strict';

angular.module('movieApp')

.constant("correspondingURL","http://www.omdbapi.com")

.service('movieService',['$resource','correspondingURL',function($resource,correspondingURL){

    this.getSummary = function(){

     return $resource(correspondingURL,null );

                                   
                    
            };

            
    
        
}])

;