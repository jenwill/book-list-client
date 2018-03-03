var app = app || {};
const __API_URL__ = 'http://localhost:3000';

(function(module) {
  const adminView = {};

  adminView.initAdminPage = function (ctx) {
    $('.admin-view').show();
    $('.nav-menu').slideUp(350);
    $('#admin-form').on('submit', adminView.verify);
  }

  adminView.verify = (event) => {
    event.preventDefault();
    let token = event.target.passphrase.value;
    $.get(`${__API_URL__}/admin`, {token})
      .then(verified => {
        if (verified) {
          localStorage.admin = true;
          page('/');
        } else {
          localStorage.admin = false;
          page('/');
        }
      })
      .catch(console.error);
  };
  module.adminView = adminView;
})(app);