import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Projects from '../components/sections/Projects';
import Weather from '../components/projects/weather/Weather';
import Retail from '../components/projects/retail/Retail';
import Todolist from '../components/projects/todolist/Todolist';
import Footer from '../components/Footer';
import './App.scss';
import GoogleFontLoader from 'react-google-font-loader';
import Blog from '../components/projects/blog/Blog';
import Create from '../components/projects/blog/Create';

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
					<Route path='/project1/' component={Weather}></Route>
					<Route path='/project2/' component={Retail}></Route>
					<Route path='/project3/' component={Todolist}></Route>
					<Route exact path='/project4/' component={Blog}></Route>
					<Route path='/project4/create' component={Create}></Route>
					{/* <Route path='/project4/' component={Blog}></Route> */}
				</div>
			</Router>
			<Footer></Footer>
		</div>
	);
}

export default App;