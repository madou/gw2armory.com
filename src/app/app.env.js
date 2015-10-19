var environment = {
	client_name: 'gw2Armory',
	gw2: {
		endpoint: 'https://api.guildwars2.com/'
	}
};

if (__DEV__) {
	environment.api = {
		endpoint: 'http://192.168.59.103/',
		secret: 'bacon'
	};
}

if (__PROD__) {
	if (window && window.location.origin.indexOf('beta') >= -1) {
		environment.api = {
			endpoint: 'http://api.beta.gw2armory.com/',
			secret: 'sekritsauce'
		};
	} else {
		environment.api = {
			endpoint: 'https://api.gw2armory.com/',
			secret: 'sauce'
		};
	}
}

export default environment;