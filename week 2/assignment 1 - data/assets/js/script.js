const main = document.querySelector('main');
const zoom = document.querySelector('section');
const currentLocation = window.location;
const userArray = []; // all the user objects
currentLocation.hash = '#main';

function mainDom(user) {
	return `
		<div>
			<a href="#${user.login}">
				<img src="${user.avatar_url}"></img>
				<h2>${user.name}</h2>
				<p>${user.bio}</p>
			</a>
		</div>
	`;
}

function zoomDom(user) {
	return ` 
		<div>
			<img src="${user.avatar_url}"></img>
			<h1>${user.name}</h1>
		</div>
		<a href="#main">Back</a>
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
		.join('');

	renderToMain(getUserInfo);
}

function zoomRender() {
	const getUserInfo = userArray
		.filter(userInfo => '#' + userInfo.login === currentLocation.hash)
		.map(userInfo => zoomDom(userInfo))
		.join('');

	renderToZoom(getUserInfo);
}

function fetchSingleUser(data) {
	fetch(data)
		.then(data => data.json())
		.then(data => userArray.push(data)) // push objects into userArray
		.then(data => infoRender())
		.then(data => zoomRender());
}

function fetchData() {
	const users = [
	'https://api.github.com/users/lhafkamp', 
	'https://api.github.com/users/nickrttn',
	'https://api.github.com/users/rijkvanzanten',
	'https://api.github.com/users/BerendPronk',
	'https://api.github.com/users/camille500',
	'https://api.github.com/users/ChanelZM',
	'https://api.github.com/users/ColinDorr',
	'https://api.github.com/users/Sidstumple',
	'https://api.github.com/users/DanielDoelman',
	'https://api.github.com/users/dandevri',
	'https://api.github.com/users/DaveBitter',
	'https://api.github.com/users/Djaygo',
	'https://api.github.com/users/dylanvans',
	'https://api.github.com/users/eltongonc',
	'https://api.github.com/users/Frankwarnaar',
	'https://api.github.com/users/GiuliaM',
	'https://api.github.com/users/IanCStewart',
	'https://api.github.com/users/TuriGuilano',
	'https://api.github.com/users/larsdouweschuitema',
	'https://api.github.com/users/Murderlon',
	'https://api.github.com/users/Mimaaa',
	'https://api.github.com/users/nooroel-imamdi',
	'https://api.github.com/users/olli208',
	'https://api.github.com/users/pierman1',
	'https://api.github.com/users/rvdpas',
	'https://api.github.com/users/royvanderzon',
	'https://api.github.com/users/shyanta',
	'https://api.github.com/users/Sjoerdbeentjes',
	'https://api.github.com/users/soraya2',
	'https://api.github.com/users/StijnHoeks',
	'https://api.github.com/users/TimoVerkroost',
	'https://api.github.com/users/SadisticSun',
	'https://api.github.com/users/Zishrodrigues',
	];
	users.forEach(user => fetchSingleUser(user));
}

fetchData();

function toggle() {
	if (currentLocation.hash !== '#main') {
		main.style.display = 'none';
		zoom.style.display = 'block';
	} else {
		main.style.display = 'flex';
		zoom.style.display = 'none';
	}
}

window.addEventListener('hashchange', infoRender);
window.addEventListener('hashchange', zoomRender);
window.addEventListener('hashchange', toggle);
