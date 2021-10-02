/*!
 * jQuery Search Among Plugin
 * https://github.com/glebkema/jquery-search-among
 * 
 * Version: 0.2.1
 *
 * Copyright Gleb Kemarsky
 * Released under the MIT license.
 */

(function ($) {

    $.fn.searchAmong = function($items) {
        let oldSearch = "";

        $(this).on("input", function() {
            let newSearch = this.value.trim().toLowerCase();
            if (newSearch !== oldSearch) {
                oldSearch = newSearch;
                if (newSearch) {
                    let words = newSearch.split(/\s+/);
                    let count = words.length;
                    for (let item of $items) {
                        let text = $(item).text().toLowerCase();
                        let is_visible = true;
                        for (let i = 0; i < count; i++) {
                            if (-1 === text.indexOf(words[i])) {
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