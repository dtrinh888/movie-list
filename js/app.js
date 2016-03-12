var MovieList = angular.module('MovieList', []);

/**
 * Movie factory, provides list of movies and methods
 * to add, remove, and mark as watched. Takes no dependencies.
 */

MovieList.factory('MoviesFactory', function(){
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

	}
})