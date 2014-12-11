Instagram-Widget
================

Simple instagram widget to display recent images from an Instagram user

## Example page (we love harold)
http://htmlpreview.github.io/?https://github.com/achen187/Instagram-Widget/blob/master/example.html

## Basic usage

```html
<div class="widget"></div>
```

```js
$(document).ready(function() {
    instagram($('#widget', 'thecatharold', 2, 3);
});
```

## instagram() call
The first argument is what div to put the widget in. The second is the tag of the username. (Please make sure this is correct!!!!) The third and fourth are the number of rows and cols. 

# Installation
1. Make sure you have the latest jquery linked
2. Link instagram-widget.js and instagram-widget.css
3. Call instagram() when your page loads as above!
Thats it!

Created by Andy Chen
