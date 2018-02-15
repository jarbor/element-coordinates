# element-coordinates
Element Coordinates is a minimal package for determining any element's basic positioning and sizing on the page. The `top`, `bottom`, `left`, `right`, `height` and `width` are provided for the element's content box (inner dimensions), padding box (content and padding, not including border) and border box (outer dimensions).

## Installation
```
yarn add element-coordinates
```

### ES6
```js
import ElementCoordinates from 'element-coordinates';
```

### CommonJS
```js
var ElementCoordinates = require('element-coordinates');
```

### Global Script Include
```html
<script src="element-coordinates.js">
```

## Usage
To begin using Element Coordinates package, simply pass an element or css selector into the constructor and save the result:
```js
var coordinates = ElementCoordinates('#my-element');
```

The resulting object will have three properties:
* `coordinates.borderBox`
* `coordinates.paddingBox`
* `coordinates.contentBox`

Each of the box properties exposes the same properties as [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) but the values are relative to the document, instead of the scrolled viewport. Namely: `top`, `bottom`, `left`, `right`, `height` and `width`.

## Example
See [/examples/index.html](http://htmlpreview.github.io/?http://github.com/jsneden/element-coordinates/blob/master/examples/index.html) for a full example, but the below is provided to show the syntax all together:
```js
var coordinates = ElementCoordinates('#my-element');
var borderBox = coordinates.borderBox;
var contentBox = coordinates.contentBox;
var space = (contentBox.left - borderBox.left) + 'px';
console.log('Total left space (border and padding) between exterior and content is ' + space);
```
