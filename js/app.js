angular.module('movieApp', [])
  .controller('movieController', function($scope){

    // $scope.movies = [
    //   {title: "The Matrix", yearFilmed: "1999", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", rating: 4},
    //   {title: "Avatar", yearFilmed: "2009", description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", rating: 5}
    // ];
    // $scope.listEmpty = false;

    // Initialize localStorage with the list if it already exists or an empty array
    localStorage.movieList = localStorage.movieList ? localStorage.movieList : JSON.stringify([]);
    $scope.movies = JSON.parse(localStorage.movieList);

    // add movie to list
    $scope.addMovie = function () {
      $scope.movies.push({
        title: $scope.title,
        yearFilmed: $scope.yearFilmed,
        description: $scope.description,
        rating: $scope.rating
      });

      // Store in localStorage
      localStorage.movieList = JSON.stringify($scope.movies);

      // reset the form field values
      $scope.title = '';
      $scope.yearFilmed = '';
      $scope.description = '';
      $scope.rating = 3;
    };

    // Remove movie
    $scope.removeMovie = function(index) {
      $scope.movies.splice(index, 1);
      localStorage.movieList = JSON.stringify($scope.movies);
    };
  })
  .controller('bindExCtl', function ($scope) {
    $scope.title = '';
    $scope.yearFilmed = '';
    $scope.description = '';
    $scope.rating = 3;
  });


jQuery('#add-movie').on('click', function() {
  jQuery('.modal').modal('show');
});
