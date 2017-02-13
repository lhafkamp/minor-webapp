// first const data has the original data but can only be called 500 times a month, uncomment = great responsibility

// const data = fetch('https://holidayapi.com/v1/holidays?key=a23b6d0b-186c-445d-b64c-4dec98245799&country=NL&year=2016');

function logData(data) {
	const garbage = Object.keys(data).map(key => data[key].map(trash => {
		console.log(trash);
	}));
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
