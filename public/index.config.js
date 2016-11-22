(function() {
  'use strict';

  angular
  .module('allSignIn')
  .config(config);

  /** @ngInject */
  function config(RestangularProvider, apiUrl) {
      RestangularProvider.setBaseUrl(apiUrl);
      RestangularProvider.setFullResponse(true);
      // RestangularProvider.setRestangularFields({
      //   id: "_id"
      // });
    }
  })();
