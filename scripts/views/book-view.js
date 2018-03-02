'use strict';

var app = app || {};

(function (module){
  const bookView = {};

  function reset() {
    $('.container').hide();
    $('.nav-menu').slideUp(350);
  }

  bookView.initIndexPage = function () {
    $('.container').hide();
    $('.book-view').show();
    $('#book-count span').empty()
    $('#book-list').empty()
    app.Book.all.map(book => $('#book-list').append(book.toHtml()));
    $('#book-count span').append(app.Book.all.length);
  }

  bookView.initDetailView = function (ctx) {
    $('.container').hide();
    $('.detail-view').show();
    $('#book-detail').empty();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('#book-detail').append(template(ctx));
    
    $('#delete-button').on('click', function() {
      console.log($(this).data('id'));
      module.Book.delete($(this).data('id'));
    })
  }

  bookView.initAddBook = function () {
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
      module.Book.create(book);
    })
  }

  module.bookView = bookView;
})(app);