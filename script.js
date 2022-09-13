mapboxgl.accessToken = MAPBOX_TOKEN;
navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation, {
	enableHighAccuracy: true,
});

function sucessLocation(userPos) {
	console.log(userPos);
	setupMap([userPos.coords.longitude, userPos.coords.latitude]);
}

function errorLocation() {
	setupMap([-2.24, 53.48]);
}

function setupMap(center) {
	// initializing the map
	const map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center,
		zoom: 14,
	});

	// adding navigation controls
	const nav = new mapboxgl.NavigationControl();
	map.addControl(nav);

	// adding direction controls
	const directions = new MapboxDirections({
		accessToken: mapboxgl.accessToken,
	});
	map.addControl(directions, 'top-left');
}
