'use strict';

var adminApp = {};

(function (module){

  const adminView = {};

  adminView.initAdminPage = function (ctx) {
    $('.container').hide();
    $('.admin-view').show();
    // callback();
  }
  module.adminView = adminView;

})(adminApp);