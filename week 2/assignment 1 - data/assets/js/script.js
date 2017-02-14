// first const data has the original data but can only be called 500 times a month, uncomment = great responsibility
// const data = fetch('https://holidayapi.com/v1/holidays?key=a23b6d0b-186c-445d-b64c-4dec98245799&country=NL&year=2016');

function logData(data) {
	renderToDom(Object.keys(data)
		.map(hd => data[hd])
		.map(hd => hd[0])
		.map(hd => `<div>${hd.name}</div>`));
}

function renderToDom(divArray) {
	document.querySelector('#app').innerHTML = divArray.reduce((html, div) => html += div);
}

function fetchData() {
	fetch('https://holidayapi.com/v1/holidays?key=3e22d5ed-edb5-4b5e-b0eb-72554b705c89&country=NL&year=2016')
		.then(data => data.json())
		.then((data) => {
			logData(data.holidays);
		})
		.catch((error) => {
			console.log(error);
		});
}

fetchData();