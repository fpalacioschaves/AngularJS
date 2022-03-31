// Define a new module for our app
var app = angular.module("instantSearch", []);



// The controller

function InstantSearchController($scope){

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

	$scope.items = [
		{
			url: 'http://www.tutorialspoint.com/android/',
			title: 'Android tutorials',
			image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/angularjs/',
			title: 'AngularJs Tutorials ',
			image: 'http://www.tutorialspoint.com/angularjs/images/angularjs-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/html5/',
			title: 'HTML5 Tutorials',
			image: 'http://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/css/',
			title: 'CSS Tutorials',
			image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/java/',
			title: 'Java Tutorials',
			image: 'http://www.tutorialspoint.com/java/images/java-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/joomla/',
			title: 'Joomla Tutorials',
			image: 'http://www.tutorialspoint.com/joomla/images/joomla-mini-logo.jpg'
		},
		{
			url: 'http://www.tutorialspoint.com/html/',
			title: 'HTML Tutorials ',
			image: 'http://www.tutorialspoint.com/html/images/html-mini-logo.jpg'
		}
	];


}
