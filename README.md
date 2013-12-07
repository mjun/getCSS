getCSS
=============

Cross browser function for dynamic loading of external CSS files.

This is a fork of jquery-getCSS plugin by [intesso](http://intesso.github.com/jquery-getCSS/) with optional additional parameter "append" which controls if dynamically loaded CSS should be appended or replaced.

see: [github page](http://github.com/mjun/getCSS/)

## Usage
Download the file [getCSS.js](https://raw.github.com/mjun/jquery-getCSS/master/getCSS.js) or the minified version (only 574 bytes!) [getCSS.min.js](https://raw.github.com/mjun/jquery-getCSS/master/getCSS.min.js) and include it in the header of your html:
```html
	<script src="getCSS.js"></script>
```

```html
	<script src="getCSS.min.js"></script>
```

This plugin does not depend on jQuery, but if jQuery is loaded it adds the getCSS function to the jQuery object:
```js
	$.getCSS("getCSS.css");
```

Otherwise it adds it to the window object:
```js
	window.getCSS("getCSS.css");
```

### Options
The function takes two arguments, 'attributes' and 'append' of which the latter is optional. Argument 'attributes' can be passed as a string, indicating a path to the CSS file, or a map which defines all CSS reference attributes. If your statically loaded CSS in html has 'id' attribute defined, you can even replace that CSS if you supply 'id' key in attributes map.

```js
	// attributes as string (path to 'fresh.css' file), appended to html:
	$.getCSS("fresh.css", true)

	// css defined via map, not appended:
	$.getCSS({href:"cool.css", media:"print"})
	$.getCSS({href:"/styles/forest.css", media:"screen"})
	
	// replaces statically defined css with id 'staticCSS'
	$.getCSS({href:"/styles/dynamic.css", media:"screen", id:"staticCSS"})
```

## Testing

Tested with Firefox, Chrome, IE

[Demo with jQuery](https://github.com/mjun/jquery-getCSS/master/getCSS2.html)
[Demo without jQuery](https://github.com/mjun/jquery-getCSS/master/getCSS.html)

## Credits
Original Idea by:
Soviut http://stackoverflow.com/questions/1184950/dynamically-loading-css-stylesheet-doesnt-work-on-ie

Original plugin by:
Intesso http://intesso.github.com/jquery-getCSS/

## References
IE special: http://msdn.microsoft.com/en-us/library/ie/ms531194(v=vs.85).aspx

## License 
[MIT License](https://github.com/mjun/jquery-getCSS/blob/master/LICENSE)

## Support or Contact
If you have any questions or problems with this script feel free to contact me at: matko.jun@gmail.com

