(function () {
  'use strict';

  angular
  .module('allSignIn')
  .config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'signin/signin.html',
      controller: 'signInCtrl',
      controllerAs: 'vm'
    })
  }
})();
