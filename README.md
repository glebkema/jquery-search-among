# jquery-search-among
Use input field to provide a quick search among list items, text paragraphs or another blocks of the web-page content.

Specify multiple search terms, separated by spaces.

As you enter characters, inappropriate items disappear.

## Options
| Option         | Meaning |
|----------------|---------|
| sourceSelector | Selector of items, among which the search is performed. |

You can use a string instead of an `options` object as a plugin parameter. In this case, the string will be interpreted as the value of the `sourceSelector` option.

## Usage examples
```js
jQuery(document).ready(function($) {

    $('#search1').searchAmong('.content>p');

    $('#search2').searchAmong({
        sourceSelector: '.list>li',
    });

});
```
