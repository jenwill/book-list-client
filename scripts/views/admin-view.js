var app = app || {};

(function(module) {
  const adminView = {};

  adminView.initAdminPage = function () {
    $('.container').hide();
    $('.admin-view').show();
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