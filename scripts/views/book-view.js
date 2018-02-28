'use strict';

var app = app || {};

(function (module){
  const bookView = {};

  function reset() {
    $('.container').hide();
    $('.navigation').slideDown(350);
  }

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    $('#book-count span').empty()
    $('#book-list').empty()
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
    $('#book-count span').append(app.Book.all.length);
  }

  bookView.initDetailView = function () {
    $('.container').hide();
    $('.detail-view').show();
    $('#book-detail').append(app.Book.detailToHtml());
  }

  bookView.initAddBook= function () {
    reset();
    $('.form-view').show();
    $('#add-form').on('submit', function (event) {
      event.preventDefault();
      let book = {
        title: event.target.title.value,
        description: event.target.description.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value
      }
      module.Book.createBook(book);
    })
  }

  module.bookView = bookView;
})(app);