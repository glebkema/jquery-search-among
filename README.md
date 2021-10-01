# jquery-search-among
Use input field to provide a quick search among list items, text paragraphs or another blocks of the web-page content. 

Specify multiple search terms, separated by spaces.

As you enter characters, inappropriate items disappear.

## Usage example
```js
jQuery(document).ready(function($) {

    $('#search').searchAmong( $('.content').children('p') );

});
```
