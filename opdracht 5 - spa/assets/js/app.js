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
			options.forEach(option => {
				if (route === `#${option.id}`) { // if route (the current #) = equal to option.id (the current #) do:
					option.classList.remove('hide');
				} else {
					option.classList.add('hide');
				}
			});
		},
	};
	app.init();
})();
