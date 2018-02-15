class ElementCoordinates {
	constructor(element) {
		this.element = element;
	}

	get scrollTop() {
		return window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
	}

	get scrollLeft() {
		return window.scrollX !== undefined ? window.scrollX : window.pageXOffset;
	}

	get scrollPosition() {
		return { top: this.scrollTop, left: this.scrollLeft };
	}

	get borderBox() {
		return new Rectangle(this.element.getBoundingClientRect(), this.scrollPosition);
	}

	get paddingBox() {
		let style = window.getComputedStyle(this.element);
		return new Rectangle(this.element.getBoundingClientRect(), this.scrollPosition, {
			top: Number(style.getPropertyValue('border-top-width').split('px')[0]),
			bottom: Number(style.getPropertyValue('border-bottom-width').split('px')[0]),
			left: Number(style.getPropertyValue('border-left-width').split('px')[0]),
			right: Number(style.getPropertyValue('border-right-width').split('px')[0])
		});
	}

	get contentBox() {
		let style = window.getComputedStyle(this.element);
		return new Rectangle(this.element.getBoundingClientRect(), this.scrollPosition, {
			top: Number(style.getPropertyValue('border-top-width').split('px')[0]) +
			     Number(style.getPropertyValue('padding-top').split('px')[0]),
			bottom: Number(style.getPropertyValue('border-bottom-width').split('px')[0]) + 
			        Number(style.getPropertyValue('padding-bottom').split('px')[0]),
			left: Number(style.getPropertyValue('border-left-width').split('px')[0]) + 
			      Number(style.getPropertyValue('padding-left').split('px')[0]),
			right: Number(style.getPropertyValue('border-right-width').split('px')[0]) + 
			       Number(style.getPropertyValue('padding-right').split('px')[0])
		});
	}
}

class Rectangle {
	constructor(values, scroll, offsets) {
		this.values = values;
		this.scroll = scroll;
		this.offsets = offsets || {};
	}

	get top() {
		return this.values.top + this.scroll.top + (this.offsets.top || 0);
	}

	get left() {
		return this.values.left + this.scroll.left + (this.offsets.left || 0);
	}

	get bottom() {
		return this.values.bottom + this.scroll.top + (this.offsets.top || 0) - (this.offsets.bottom || 0);
	}

	get right() {
		return this.values.right + this.scroll.left + (this.offsets.left || 0) - (this.offsets.right || 0);
	}

	get height() {
		return this.values.height - (this.offsets.top || 0) - (this.offsets.bottom || 0);
	}

	get width() {
		return this.values.width - (this.offsets.left || 0) - (this.offsets.right || 0);
	}
}

export default ElementCoordinates;