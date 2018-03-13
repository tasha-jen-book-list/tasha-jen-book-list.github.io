'use strict';

(function(module) {
    const Book = module.Book;

    const bookView = {};

    const bookTemplate = Handlebars.compile($('#book-template').html());
    const detailTemplate = Handlebars.compile($('#book-detail-template').html());

    function resetView() {
        $('.view').hide();
    }

    bookView.init = () => {
        resetView();
        $('#books-view').show();

        Book.all.forEach(book => {
            const bookCard = bookTemplate(book);
            $('#books').append(bookCard);
        });
        // bookView.handleSubmit();
    };

    bookView.initNew = () => {
        resetView();
        $('#new-book-view').show();
    }; 

    bookView.initDetail = id => {
        resetView();

        const bookDetail = detailTemplate(Book.detail);

        $('#detail-book-view')
            .empty()
            .append(bookDetail)
            .show();
    };

    // bookView.handleSubmit = () => {
    //     $('#add-book').on('submit', event => {
    //         event.preventDefault();
            
    //         const book = new Book({
    //             task: $('#book-task').val()
    //         });

    //         book.insert(() => {
    //             $('#book-task').val('');
    //             bookView.loadBook(book);
    //         });
    //     });
    // };

    // What does your module export
    module.bookView = bookView;

})(window.module);