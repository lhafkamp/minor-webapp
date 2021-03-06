const story = (function() {
	const main = document.querySelector('main');
	const zoom = document.querySelector('section');
	const searchInput = document.querySelector('input');
	const loader = document.querySelector('#loaderbox');
	const github = 'https://api.github.com/users/';
	const userArray = []; // all the user objects
	const currentLocation = window.location;

	// start story
	fetchData();

	// get all users
	function fetchData() {
		const users = ['lhafkamp', 'nickrttn', 'rijkvanzanten', 'camille500',
		'IanCStewart', 'ChanelZM', 'TuriGuilano', 'Sidstumple', 'DanielDoelman',
		'dandevri', 'DaveBitter', 'Djaygo', 'dylanvans', 'eltongonc',
		'Frankwarnaar', 'GiuliaM', 'BerendPronk', 'larsdouweschuitema',
		'Murderlon', 'Mimaaa', 'nooroel-imamdi', 'olli208', 'pierman1',
		'rvdpas', 'royvanderzon', 'shyanta', 'ColinDorr', 'Sjoerdbeentjes',
		'soraya2', 'SadisticSun', 'TimoVerkroost', 'Zishrodrigues', 'StijnHoeks'];
		users.forEach(user => fetchSingleUser(`${github}${user}`));
	}

	// fetch data
	function fetchSingleUser(data) {
		fetch(data)
			.then(data => data.json())
			.then(data => userArray.push(data)) // push objects into userArray
			.then(data => mainData())
			.then(data => zoomData())
			.then(loadingComplete)
			.catch(error => console.log(error));
	}

	// fade out loading screen once the data is loaded
	function loadingComplete() {
		loader.classList.add('smoothness');
	}

	// renders the right data into the main page
	function mainData() {
		const getUserInfo = userArray
			.map(userInfo => mainDom(userInfo)) // get html ele's
			.join(''); // joined all the data into one string and removed the ,'s.
			// could have used reduce but join is quicker

		renderToMain(getUserInfo);
	}

	// renders the right data into the zoom page
	function zoomData() {
		const getUserInfo = userArray
			.filter(userInfo => `#${userInfo.login}` === currentLocation.hash) // only get the data from the user who matches with #
			.map(userInfo => zoomDom(userInfo))
			.join('');

		renderToZoom(getUserInfo);
	}

	window.addEventListener('hashchange', mainData);
	window.addEventListener('hashchange', zoomData);

	// render ele's to HTML
	function renderToMain(elements) {
		main.innerHTML = elements;
	}

	// render ele's to HTML
	function renderToZoom(elements) {
		zoom.innerHTML = elements;
	}

	// returns the main html as a template string
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

	// returns the zoom html as a template string
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

	// filter inputs based on account names
	function searchUsers(input, array) {
		const regex = new RegExp(input, 'gi');
		return array.filter(user => user.login.match(regex));
	}

	// output from the search input
	function searchResults(value) {
		const outputArray = searchUsers(this.value, userArray);
		value = outputArray.map(output => mainDom(output)).join('');
		renderToMain(value);
	}

	searchInput.addEventListener('keyup', searchResults);
})();

const routing = (function() {
	const main = document.querySelector('main');
	const zoom = document.querySelector('section');
	const nav = document.querySelector('nav p');
	const currentLocation = window.location;
	currentLocation.hash = '#main'; // startup location = #main

	// toggle between the main content and the zoom content
	function toggle() {
		if (currentLocation.hash !== '#main') {
			main.classList.add('hide');
			zoom.classList.add('show');
			main.classList.remove('showFlex');
		} else {
			zoom.classList.add('hide');
			main.classList.add('showFlex');
			zoom.classList.remove('show');
		}
	}

	window.addEventListener('hashchange', toggle);

	// scroll to top/go back to #main when nav is clicked
	function scrollToTop() {
		currentLocation.hash = '#main';
		window.scrollTo(0, this.offSetTop);
	}

	nav.addEventListener('click', scrollToTop);
})();
