const mainContent = document.querySelector('#app');
const userArray = []; // all the user objects

function setUpDom(user) {
	return `<div>${user.name} - ${user.bio}</div>`;
}

function renderToDom(elements) {
	// TODO remove smt
	const smt = mainContent.innerHTML = elements; // render ele's to HTML
	console.log(smt);
}

function nameRender() {
	const getUserInfo = userArray
		.map(userInfo => setUpDom(userInfo)) // get html ele's
		.join('');

	renderToDom(getUserInfo);
}

function fetchSingleUser(user) {
	const derp = fetch(user)
		.then(data => data.json())
		.then(data => userArray.push(data)) // push objects into userArray
		.then(data => nameRender());
}

function fetchData() {
	const users = [
	'https://api.github.com/users/lhafkamp', 
	'https://api.github.com/users/nickrttn',
	'https://api.github.com/users/rijkvanzanten',
	];
	users.forEach(user => fetchSingleUser(user));
}

fetchData();
