// first const data has the original data but can only be called 500 times a month, uncomment = great responsibility

// const data = fetch('https://holidayapi.com/v1/holidays?key=a23b6d0b-186c-445d-b64c-4dec98245799&country=NL&year=2016');
const data = fetch('https://holidayapi.com/v1/holidays?key=3e22d5ed-edb5-4b5e-b0eb-72554b705c89&country=NL&year=2016');


console.log(data);

data
	.then(data => data.json())
	.then(data => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
