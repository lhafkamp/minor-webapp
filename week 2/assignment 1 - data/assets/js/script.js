(function() {
	const main = document.querySelector('main');
	const zoom = document.querySelector('section');
	const nav = document.querySelector('nav p');
	const searchInput = document.querySelector('form input');
	const suggestions = document.querySelector('main');
	const userArray = []; // all the user objects
	const currentLocation = window.location;
	currentLocation.hash = '#main'; // startup location = #main

	window.addEventListener('hashchange', infoRender);
	window.addEventListener('hashchange', zoomRender);


	function searchUsers(input, userArray) {
		const regex = new RegExp(input, 'gi');
		return userArray.filter(user => user.login.match(regex));
	}

	function searchResults() {
		const outputArray = searchUsers(this.value, userArray);
		const html = outputArray.map(output => mainDom(output)).join('');
		suggestions.innerHTML = html;
	}

	searchInput.addEventListener('keyup', searchResults);


	fetchData();

	function mainDom(user) {
		return `
			<div id="all">
				<a href="#${user.login}">
					<img class="ava" src="${user.avatar_url}"></img>
					<img class="gitlogo" src="assets/images/git.png"/>
					<h2>${user.login}</h2>
				</a>
			</div>
		`;
	}

	function zoomDom(user) {
		return ` 
			<div>
				<img src="${user.avatar_url}"></img>
				<article>
					<h1>${user.login}</h1>
					<span>Name:</span>
					<p>${user.name}</p>
					<span>Biography:</span>
					<p>${user.bio}</p>
					<span>Works for:</span>
					<p>${user.company}</p>
					<span>Github link:</span>
					<a href="${user.html_url}">${user.html_url}</a>
					<span>Public repo's:</span>
					<p>${user.public_repos}</p>
					<a class="back" href="#main">Back</a>
				</article>
			</div>
		`;
	}

	function renderToMain(elements) {
		main.innerHTML = elements; // render ele's to HTML
	}

	function renderToZoom(elements) {
		zoom.innerHTML = elements; // render ele's to HTML
	}

	function infoRender() {
		const getUserInfo = userArray
			.map(userInfo => mainDom(userInfo)) // get html ele's
			.join(''); // joined all the data into one string and removed the ,'s.
			// could have used reduce but join is quicker

		renderToMain(getUserInfo);
	}

	function zoomRender() {
		const getUserInfo = userArray
			.filter(userInfo => `#${userInfo.login}` === currentLocation.hash) // only get the data from the user who matches with #
			.map(userInfo => zoomDom(userInfo))
			.join('');

		renderToZoom(getUserInfo);
	}

	function fetchSingleUser(data) {
		fetch(data)
			.then(data => data.json())
			.then(data => userArray.push(data)) // push objects into userArray
			.then(data => infoRender())
			.then(data => zoomRender())
			.catch(error => console.log(error)); 
	}

	function fetchData() {
		const users = [
		'https://api.github.com/users/lhafkamp', 
		'https://api.github.com/users/nickrttn',
		'https://api.github.com/users/rijkvanzanten',
		'https://api.github.com/users/camille500',
		'https://api.github.com/users/IanCStewart',
		'https://api.github.com/users/ChanelZM',
		'https://api.github.com/users/TuriGuilano',
		'https://api.github.com/users/Sidstumple',
		'https://api.github.com/users/DanielDoelman',
		'https://api.github.com/users/dandevri',
		'https://api.github.com/users/DaveBitter',
		'https://api.github.com/users/Djaygo',
		'https://api.github.com/users/dylanvans',
		'https://api.github.com/users/eltongonc',
		'https://api.github.com/users/Frankwarnaar',
		'https://api.github.com/users/GiuliaM',
		'https://api.github.com/users/BerendPronk',
		'https://api.github.com/users/larsdouweschuitema',
		'https://api.github.com/users/Murderlon',
		'https://api.github.com/users/Mimaaa',
		'https://api.github.com/users/nooroel-imamdi',
		'https://api.github.com/users/olli208',
		'https://api.github.com/users/pierman1',
		'https://api.github.com/users/rvdpas',
		'https://api.github.com/users/royvanderzon',
		'https://api.github.com/users/shyanta',
		'https://api.github.com/users/ColinDorr',
		'https://api.github.com/users/Sjoerdbeentjes',
		'https://api.github.com/users/soraya2',
		'https://api.github.com/users/SadisticSun',
		'https://api.github.com/users/TimoVerkroost',
		'https://api.github.com/users/Zishrodrigues',
		'https://api.github.com/users/StijnHoeks',
		];
		users.forEach(user => fetchSingleUser(user));
	}

	function toggle() { // toggle between the main content and the zoom content
		if (currentLocation.hash !== '#main') {
			main.style.display = 'none';
			zoom.style.display = 'block';
		} else {
			main.style.display = 'flex';
			zoom.style.display = 'none';
		}
	}

	window.addEventListener('hashchange', toggle);

	function scrollToTop() { // scroll to top/go back to #main when nav is clicked
		currentLocation.hash = '#main';
		window.scrollTo(0, this.offSetTop);
	}

	nav.addEventListener('click', scrollToTop);
})();

