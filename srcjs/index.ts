/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../common/partials/main.controller.ts" />
/// <reference path="../../common/references/references.d.ts" />


/// <reference path="elmachina.ts" />

module flexportal {
  'use strict';

  angular.module('flexportal', ['ngAnimate', 'ngTouch', 'ngSanitize', 'restangular', 'ngMaterial',
    'ui.router', 'chart.js', 'jsonFormatter', 'swaggerUi', 'ui.grid', 'ui.grid.selection', 
    'ui.grid.pagination', 'ui.grid.exporter', 'ui.ace', 'ui.grid.resizeColumns', 
    'ngMdIcons'])
  // Controllers
    .controller('MainCtrl', ["$scope", "$mdUtil", "$mdSidenav", "$mdBottomSheet", MainCtrl])
    .controller('ErrorController', ErrorController)
    .controller('ElMachinaController', ["$scope", "$http", ElMachinaController])
    
  // Theming
    .config(function($mdThemingProvider: ng.material.IThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('grey');
    })
    
  // Route configuration
    .config(function($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
      $urlRouterProvider.otherwise("/elmachina");

      $stateProvider
          
      // Session URLs
        .state('main', {
          url: "/main",
          templateUrl: "partials/main.html",
          controller: 'MainCtrl'
        })
        
      // ElMachina
        .state('elmachina', {
          url: "^/elmachina",
          parent: 'main',
          controller: 'ElMachinaController',
          templateUrl: "elmachina.html"
        })
    });
}
