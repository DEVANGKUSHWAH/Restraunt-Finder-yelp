import axios from 'axios';

export default axios.create({
	headers: { 'Access-Control-Allow-Origin': '*' },
	baseURL:
		'https://restraunt-finder-yelp-backend.herokuapp.com/api/v1/restaurants',
});
