'use strict';

(function(module) {

    const Book = module.Book;
    const bookView = module.bookView;
    const loginView = module.loginView;
    const searchedView = module.searchedView;

    $('.icon-menu').on('click', () => {
        $('.nav-menu').slideToggle(350);
    });

    const resetView = () => {
        $('.view').hide();
        $('.nav-menu').slideUp(350);
    };

    page('*', (ctx, next) => {
        resetView();
        next();
    });

    page('/home', () => Book.fetchAll(bookView.init));
    
    page('/login', () => loginView.init());

    page('/books/new', () => bookView.initNew());

    page('/volumes/find', () => searchedView.initSearch());

    page('/books/:id/update', ctx => Book.fetchOne(ctx.params.id, bookView.initUpdate));

    page('/books/:id', (ctx) => Book.fetchOne(ctx.params.id, bookView.initDetail));

    page('*', () => page.redirect('/home'));

    page({ hashbang: true });

})(window.module);
