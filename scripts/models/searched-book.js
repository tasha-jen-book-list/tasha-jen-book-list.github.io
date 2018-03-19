'use strict';
    
(function (module) {

    const Volume = module.Volume;

    Volume.found = null;
    Volume.total = 0;
    Volume.search = '';

    Volume.find = search => {

        //${data.title.trim()}${data.author.trim()}${data.isbn.trim()}`)
        
        Volume.search = search;
        return $.getJSON(`${GOOGLE_API_URL}/volumes?search=${encodeURIComponent(search)}`)
            .then(result => {
                Volume.found = result.books;
                Volume.total = result.total;
            });
    };

    Volume.import = isbn => {
        return $.ajax({
            url: `${API_URL}/books`,
            method: 'PUT'
        });
    };

})(window.module);