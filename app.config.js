angular.module('personalSite')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<experience></experience>'
            })
    }])