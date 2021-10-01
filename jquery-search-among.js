/*!
 * jQuery Search Among Plugin
 * https://github.com/glebkema/jquery-search-among
 * 
 * Version: 0.2.0
 *
 * Copyright Gleb Kemarsky
 * Released under the MIT license.
 */

(function ($) {

    $.fn.searchAmong = function($items) {
        let oldSearch = '';

        $(this).on('input', function() {
            let newSearch = this.value.replace(/[_-]+/g, ' ').trim();  // separate words with a space, minus or underscore
            if (newSearch !== oldSearch) {
                oldSearch = newSearch;
                if (newSearch) {
                    let words = newSearch.toLowerCase().split(/\s+/);
                    let count = words.length;
                    for (let item of $items) {
                        let text = $(item).text().toLowerCase();
                        let is_visible = true;
                        for (let i = 0; i < count; i++) {
                            if (! text.includes(words[i])) {
                                is_visible = false;
                                break;
                            }
                        }
                        $(item).toggle(is_visible);
                    }
                }
                else {
                    $items.show();
                }
            }
        });

        return this;
    };

}(jQuery));