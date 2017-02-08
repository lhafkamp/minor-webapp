'use strict';

const greatSuccesModel = (() => {

	const location = window.location;
	let oldHash = location.hash;
	const newHash = oldHash;

	const app = {
		init() {
			routes.init();
		},
	}

	const routes = {
		init() {
			window.addEventListener('hashchange', sections.toggle());
		},
	}

	const sections = {
		toggle(route) {
			oldHash = newHash;
		},
	}
	app.init();
})();

