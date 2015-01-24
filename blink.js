// Blink Web Component
/* jshint esnext: true */

(() => {
	var blinkPrototype = Object.create(HTMLElement.prototype);

	blinkPrototype.createdCallback = function() {
		this.blinkTimer = window.setInterval(() => {
			this.style.opacity = 1.0 - this.style.opacity;
		}, 500);
	};

	blinkPrototype.detachedCallback = function() {
		window.clearInterval(this.blinkTimer);
	};

	var Blink = document.registerElement('blink-element', {
		prototype: blinkPrototype
	});
})();
