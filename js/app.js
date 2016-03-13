var MovieList = angular.module('MovieList', [])

/**
 * Movie factory, provides list of movies and methods
 * to add, remove, and mark as watched. Takes no dependencies.
 */

.factory('MoviesFactory', [function(){
	var m = {
		//list of default movies
		movies: [{
			title: 'Above The Rim',
			watched: false
		}, {
			title: 'Snatch',
			watched: false
		}, {
			title: 'Goodfellas',
			watched: false
		}],
/**
 * Simple getter function that returns the list of movies
 * 
 * @return array List of movie objects
 * [
 *   {
 *	   title: string,
 	    watched: boolean
 * 	 },
 * 	...
 * ]
 */


 all: function(){
 	return m.movies;
 },

/**
 * Adds a movie title to the list
 *
 * @param string title Movie title
 * @return boolean True if movie was added
 */

 add: function(title){
 	// Check if provided title is valid
 	if(!title || !title.length){
 		return false;
 	}

 	// Initialize to false
 	var found = false;

 	// Loop through the list of movies
 	for(i=0; i < m.movies.length; i++) {
 		// Check if the provided title matches an existing title
 		if(title === m.movies[i].title) {
 			found = true;
 		}
 	}

 	// If not found, add new movie
 	if(!found) {
 		m.movies.push({
 			title: title,
 			watched: false
 		});
 		return true;
 	}

	 // If we got here, then we found the movie in the list already
	 return false;	
 },
 /**
  * Simple function to remove a title from the list of movies
  *
  * @param string title Movie title
  */

  remove: function(title) {
  	// Loop through the list of movies
  	for(i=0; i<m.movies.length; i++) {
  		// If the title matches one of the movies, remove it from the list
  		if(title === m.movies[i].title) {
  			m.movies.splice(i, 1);
  		}
  	}
  }
 };

  return m;

}])

.controller('UnwatchedCtrl', ['$scope', 'MoviesFactory', function($scope, Movies){
	$scope.movies = Movies.all();
	console.log('m', $scope.movies);
	$scope.add = Movies.add;
	$scope.remove = Movies.remove;
}])
.controller('WatchedCtrl', ['$scope', 'MoviesFactory', function($scope, Movies){
	$scope.movies = Movies.all();
	$scope.remove = Movies.remove;
}]);