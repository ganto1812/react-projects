import React from 'react';

import Homepage from '../components/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from '../components/sections/Projects';
import Weather from '../components/projects/weather/Weather';
import Retail from '../components/projects/retail/Retail';
import Todolist from '../components/projects/todolist/Todolist';
import Footer from '../components/Footer';
import './App.scss';
import GoogleFontLoader from 'react-google-font-loader';

function App() {



	return (
		<div className='App'>
			<div className='background-pattern'></div>
			<GoogleFontLoader
				fonts={[
					{
						font: 'Indie Flower'
					}
				]}
			></GoogleFontLoader>
			<Router>
				<div>
					<Route path='/' exact component={Projects}></Route>
					<Route path='/projects' exact component={Projects}></Route>
					<Route path='/projects/1' component={Weather}></Route>
					<Route path='/projects/2' component={Retail}></Route>
					<Route path='/projects/3' component={Todolist}></Route>
				</div>
			</Router>
			<Footer></Footer>
		</div>
	);
}

export default App;