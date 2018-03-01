'strict';

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/add', app.bookView.initAddBook);
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initDetailView));
page();