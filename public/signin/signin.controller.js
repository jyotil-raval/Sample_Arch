(function() {
  'use strict';

  angular
  .module('allSignIn')
  .controller('signInCtrl', signInCtrl);

  signInCtrl.$inject = ['Restangular'];

  /* @ngInject */
  function signInCtrl(Restangular) {
    var vm = this;

    vm.users = [];
    vm.user = {
      emailAddress : '',
      password : ''
    };

    vm.login = login;
    function login(form) {
      console.log(form)
      return true;
    }

    activate();

    function activate() {
      
      vm.users = Restangular
      .all('users')
      .getList({
        pagesize: 1000
      });
      //
      // console.log(vm.users);
    }
  }
})();
