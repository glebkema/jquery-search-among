/*!
 * jQuery Search Among Plugin
 * https://github.com/glebkema/jquery-search-among
 *
 * Version: 0.2.2
 *
 * Copyright Gleb Kemarsky
 * Released under the MIT license.
 */

(function ($) {

    $.fn.searchAmong = function($items) {
        let searchWords = [];

        $(this).on('input', function() {
            let newWords = this.value.trim().toLowerCase().split(/\s+/).sort();
            if (areArraysDifferent(searchWords, newWords)) {
                searchWords = newWords;
                if (searchWords) {
                    let count = searchWords.length;
                    for (let item of $items) {
                        let text = $(item).text().toLowerCase();
                        let isVisible = true;
                        for (let i = 0; i < count; i++) {
                            if (-1 === text.indexOf(searchWords[i])) {
                                isVisible = false;
                                break;
                            }
                        }
                        $(item).toggle(isVisible);
                    }
                }
                else {
                    $items.show();
                }
            }
        });

        function areArraysDifferent(array1, array2) {
            return array1.length !== array2.length || array1.some(function(value, index) {
                return value !== array2[index];
            });
        }

        return this;
    };

}(jQuery));