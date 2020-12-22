import React, { useState } from 'react';
import weather from './Weather.png';
import { Alert, Button } from 'react-bootstrap';
const axios = require('axios');

export default function Weather() {
	const [temperature, setTemperature] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [humidity, setHumidity] = useState('');
	const [description, setDescription] = useState('');
	const [feelsLike, setFeelsLike] = useState('');
	const [minTemp, setMinTemp] = useState('');
	const [maxTemp, setMaxTemp] = useState('');
	const [, setError] = useState('');
	const [showAlert, setShowAlert] = useState(false);
	const [alertText, setAlertText] = useState('');

	const getWeather = async e => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		document.getElementById('getWeather').reset();

		if (!city && !country) {
			setAlertText('Oh no! Type in something');
			setShowAlert(true);
		} else {
			setShowAlert(false);
			axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}${city &&
						country &&
						','}${country}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
				)
				.then(response => {
					const data = response.data;
					setTemperature(data.main.temp);
					setCity(data.name);
					setCountry(data.sys.country);
					setHumidity(data.main.humidity);
					setDescription(data.weather[0].description);
					setFeelsLike(data.main.feels_like);
					setMinTemp(data.main.temp_min);
					setMaxTemp(data.main.temp_max);
					setError('');
					console.log(response.data.url);
					console.log(response.data.explanation);
				})
				.catch(err => {
					setAlertText('Something went wrong. Try again later');
					setShowAlert(true);
					console.log(err);
				});
		}
	};

	return (
		<div>
			<img src={weather} alt='weather' className='mx-auto' />
			<h1>Weather APP</h1>
			<p>Find out weather temperature, conditions and more..</p>
			<form onSubmit={getWeather} id='getWeather'>
				<input type='text' name='city' placeholder='City...' />
				<input type='text' name='country' placeholder='Country...' />
				<Button type='submit' variant='info'>
					Get Weather
				</Button>
				{showAlert ? (
					<Alert
						variant='danger'
						onClose={() => setShowAlert(false)}
						dismissible
					>
						<Alert.Heading className='text-capitalize'>
							{alertText}
						</Alert.Heading>
					</Alert>
				) : (
					''
				)}
			</form>
			<div style={{ display: city || country ? 'block' : 'none' }}>
				<h1 className='my-5 pb-5'>
					{city}, {country}
				</h1>
				<div className='row col-10 mx-auto mb-5'>
					<div className='col-12 mx-auto col-sm-4'>
						<h2 className='btn-info p-3 container-fluid'>Temperature:</h2>
						<p>{temperature}C</p>
					</div>
					<div className='col-12 mx-auto col-sm-4'>
						<h2 className='btn-info p-3 container-fluid'>Humidity:</h2>
						<p>{humidity}%</p>
					</div>
					<div className='col-12 mx-auto col-sm-4'>
						<h2 className='btn-info p-3 container-fluid'>Description:</h2>
						<p className='text-capitalize'>{description}</p>
					</div>
					<div className='col-12 mx-auto col-sm-4'>
						<h2 className='btn-info p-3 container-fluid'>Feels like: </h2>
						<p>{feelsLike}C</p>
					</div>
					<div className='col-12 mx-auto col-sm-4'>
						<h2 className='btn-info p-3 container-fluid'>Min Temp: </h2>
						<p>{minTemp}C</p>
					</div>
					<div className='col-12 mx-auto col-sm-4'>
						<h2 className='btn-info p-3 container-fluid'>Max Temp: </h2>
						<p>{maxTemp}C</p>
					</div>
				</div>
			</div>
		</div>
	);
}
