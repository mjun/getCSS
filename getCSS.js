/*
 * jQuery getCSS Plugin
 * Copyright 2013, intesso, Matko Jun
 * MIT license.
 *
 * cross browser function to dynamically load an external css file.
 * 
 * This is a fork of getCSS plugin by intesso with optional additional
 * parameter "append" which controls if dynamically loaded CSS should 
 * be appended or replaced (default is replace).
 * 
 * see: [Matko Jun github page](http://github.com/mjun/jquery-getCSS/)
 * see: [intesso github page](http://intesso.github.com/jquery-getCSS/) 
 * 
 * Version: 0.1
 *
 */

(function() {
	/*
		The function takes two arguments, 'attributes' and 'append' of which 
		the latter is optional. Argument 'attributes' can be passed as a 
		string, indicating a path to the CSS file, or a map which defines 
		all CSS reference attributes. If your statically loaded CSS in html 
		has 'id' attribute defined, you can even replace that CSS if 
		you supply 'id' key in attributes map.

		// attributes as string (path to 'fresh.css' file), appended to html:
		$.getCSS("fresh.css", true)

		// css defined via map, not appended:
		$.getCSS({href:"cool.css", media:"print"})
		$.getCSS({href:"/styles/forest.css", media:"screen"})
		
		// replaces statically defined css with id 'staticCSS'
		$.getCSS({href:"/styles/dynamic.css", media:"screen", id:"staticCSS"})
	*/
	var getCSS = function(attributes, append) {
			// check if we should append or replace css
			var appendCss = false;
			if (typeof append === "boolean") {
				appendCss = append;
			}
			
			// setting default attributes
			if(typeof attributes === "string") {
				var href = attributes;
				attributes = {
					href: href
				};
			}
			
			if(!attributes.rel) {
				attributes.rel = "stylesheet";
			}
			
			// add the id attribute so we can easily replace css later
			if(!attributes.id && !appendCss) {
				attributes.id = "getCSS";
			} else if (attributes.id && appendCss) {
				// if we append css we don't want id defined
				delete attributes.id;
			}
			
			// create the stylesheet element
			var styleSheet = document.createElement("link");
			for(var key in attributes) {
				styleSheet.setAttribute(key, attributes[key]);
			}
			
			// check if our dynamic css exists in head
			var css;
			if (!appendCss) {
				css = document.getElementById(attributes.id);
			}
			if (css && !appendCss) {
				// if css exists and 'append' == false replace it
				css.parentNode.replaceChild(styleSheet, css);
			} else {
				// otherwise append the css
				var head = document.getElementsByTagName("head")[0];
				head.appendChild(styleSheet);
			}
		};

	if(typeof jQuery === "undefined") {
		window.getCSS = getCSS;
	} else {
		jQuery.getCSS = getCSS;
	}

})();
