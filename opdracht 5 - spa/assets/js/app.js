'use strict';

(() => {
	const options = document.querySelectorAll('section');
	const location = window.location;
	location.hash = '#home'; // make sure the page loads with #home

	const app = {
		init() {
			routes.init();
		},
	};

	const routes = {
		init() {
			window.addEventListener('hashchange', () => sections.toggle(location.hash)); // when the # changes call sections.toggle()
		},
	};

	const sections = {
		toggle(route) {
			// if route (the current #) = equal to option.id (the current #) do:
			options.forEach(option => route === `#${option.id}` ? // ternary operator on 2 lines for readability
			option.classList.remove('hide') : option.classList.add('hide'));  // -------------------------------
		},
	};
	app.init();
})();
