'use strict';

const greatSuccesModel = (() => {

	const home = document.querySelector('#start');
	const best = document.querySelector('#best');
	const location = window.location;
	location.hash = "#home"; // make sure it loads with #home
	
	const app = {
		init() {
			routes.init();
		},
	}

	const routes = {
		init() {
			window.addEventListener('hashchange', () => sections.toggle(location.hash)); // when the # changes call sections
		},
	}

	const sections = {
		toggle(route) {
			console.log(route);

			if (route.includes('home')) { // if route (route = the current #) has the string home do:
				home.classList.remove('hide');
				best.classList.add('hide');
			} else {
				home.classList.add('hide');
				best.classList.remove('hide');
			}
		},
	}
	app.init();
})();

