/*!
 * jQuery Search Among Plugin
 * https://github.com/glebkema/jquery-search-among
 *
 * Version: 0.2.5
 *
 * Copyright Gleb Kemarsky
 * Released under the MIT license.
 */

(function ($) {

    $.fn.searchAmong = function(options) {
        if ('string' === typeof options || options instanceof String) {
            options = { sourceSelector: options };
        }

        let searchWords = [];

        $(this).on('input', function() {
            let newWords = getWords(this.value);
            if (areArraysDifferent(searchWords, newWords)) {
                searchWords = newWords;
                let $items = $.find(options.sourceSelector);  // prevent the selector from being interpreted as HTML: https://lgtm.com/rules/1511421786841/
                if (searchWords) {
                    let count = searchWords.length;
                    for (let item of $items) {
                        let $item = $(item);
                        let text = $item.text().toLowerCase();
                        let isVisible = true;
                        for (let i = 0; i < count; i++) {
                            if (-1 === text.indexOf(searchWords[i])) {
                                isVisible = false;
                                break;
                            }
                        }
                        $item.toggle(isVisible);
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

        function filterConstraints(words) {
            words.sort(function(a, b) {
                return b.length - a.length;
            });

            let filtered = [];
            let filteredLength = 0;
            checkWords: for (let wordsIndex = 0, wordsLength = words.length; wordsIndex < wordsLength; wordsIndex++) {
                let word = words[wordsIndex];
                for (let j = 0; j < filteredLength; j++) {
                    if (filtered[j].indexOf(word) > -1) {
                        continue checkWords;
                    }
                }
                filtered[filteredLength++] = word;
            }
            return filtered;
        }

        function getWords(value) {
            value = value.trim();
            if ('' === value) {
                return [];
            }

            let words = value.toLowerCase().split(/\s+/);
            return filterConstraints(words).sort();
        }

        return this;
    };

}(jQuery));