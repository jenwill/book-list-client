'use strict';

var app = app || {};

(function (module){
  const bookView = {};

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
    $('#book-count span').append(app.Book.all.length);
  }

  bookView.initDetailView = function () {
    $('.container').hide();
    $('.detail-view').show();
    $('#book-detail').append(app.Book.detailToHtml());
  }

  module.bookView = bookView;
})(app);

// $(function () {
//   app.Book.fetchAll(app.bookView.initIndexPage);
// });