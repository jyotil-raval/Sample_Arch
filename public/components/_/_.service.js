(function() {
    'use strict';

    angular
        .module('allSignIn')
        .service('_', _);

    _.$inject = ['$window'];

    /* @ngInject */
    function _($window) {
        return $window._;
    }
})();
