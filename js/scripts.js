(function() {
	'use strict';

	const introOverlay = document.querySelector('.intro__overlay'),
		header = document.querySelector('.header');
	if ( introOverlay && header ) {
		window.addEventListener("DOMContentLoaded", () => {
			let vh = window.innerHeight * 0.01 * 100 - header.offsetHeight + 2;
			introOverlay.style.minHeight = vh + 'px';
		});
	}

	const dataToggle = document.querySelectorAll('[data-toggle]');
	if ( dataToggle.length > 0 ) {
		dataToggle.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				item.classList.toggle('_active');
			});
		});
	}

	const dataScroll = document.querySelectorAll('[data-scroll]');
	if ( dataScroll.length > 0 ) {
		dataScroll.forEach(item => {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				let scrollTarget = document.getElementById( item.getAttribute('data-scroll').substring(1) );
				let topOffset =  header ? header.offsetHeight : 0;
				let elementPosition = scrollTarget.getBoundingClientRect().top;
				let offsetPosition = elementPosition - topOffset;

				window.scrollBy({
					top: offsetPosition,
					behavior: 'smooth'
				});
			});
		});
	}

})();