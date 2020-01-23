import React, { useState } from 'react';

export default function Weather() {
	const [temperature, setTemperature] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [humidity, setHumidity] = useState('');
	const [description, setDescription] = useState('');
	const [, setError] = useState('');

	const API_KEY = '5e24ee893ffee0be84871d9545bb6d57';

	const getWeather = async e => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
		);
		const data = await api_call.json();
		console.log(data);

		setTemperature(data.main.temp);
		setCity(data.name);
		setCountry(data.sys.country);
		setHumidity(data.main.humidity);
		setDescription(data.weather[0].description);
		setError('');
	};

	return (
		<div>
			<h1>Testing!</h1>
			<h1>Testing!</h1>
			<h1>Weather APP</h1>
			<p>Find out weather temperature, conditions and more..</p>
			<form onSubmit={getWeather}>
				<input type='text' name='city' placeholder='City...' />
				<input type='text' name='country' placeholder='Country...' />
				<button type='submit'>Get Weather</button>
			</form>
			<h2>
				{city}, {country}
			</h2>
			<h3>Current temperature:</h3>
			<p>{temperature}</p>
			<h3>Current humidity:</h3>
			<p>{humidity}</p>
			<h3>Description: </h3>
			<p>{description}</p>
		</div>
	);
}
