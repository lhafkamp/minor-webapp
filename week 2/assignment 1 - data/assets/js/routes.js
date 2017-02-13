const currentLocation = window.location;
currentLocation.hash = '#home';

// set up routes
routie({
    'home': function() {
    	console.log('home');
    },
    'nothome': function() {
    	console.log('nothome');
    }
});

function derp() {
	console.log('direct to nothome');
	routie('users/nothome');
}

window.addEventListener('click', derp);