'use strict';

var adminApp = {};

(function (module){

  const adminView = {};

  adminView.initAdminPage = function (ctx) {
    $('.container').hide();
    $('.nav-menu').slideUp(350);
    $('.admin-view').show();
    $('#admin-login').on('submit', function(event){
      event.preventDefault();
      let token = event.target.passcode.value;
      $.get(`${__API_URL__}/api/v1/admin`, {token})
        .then(res => console.log(res))
        .catch(() => page('/'));
    });

  }



  module.adminView = adminView;

})(adminApp);