import React from 'react';
import MyNav from '../components/MyNav';
// import Header from '../components/Header';
// import { CookiesProvider } from 'react-cookie';
import Homepage from '../components/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
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
				<MyNav></MyNav>
				<div className='big-container'>
					<Route path='/' exact component={Homepage}></Route>
					<Route path='/about' exact component={About}></Route>
					<Route path='/projects' exact component={Projects}></Route>
					{/* <Route path='/projects/js/{id}' component={Projects.js.id}></Route> */}
					{/* <Route
							path='/projects/react/{id}'
							component={Projects / react / id}
						></Route> */}
					<Route path='/projects/1' component={Weather}></Route>
					<Route path='/projects/2' component={Retail}></Route>
					<Route path='/projects/3' component={Todolist}></Route>
					<Route path='/Contact' exact component={Contact}></Route>
				</div>
			</Router>
			<Footer></Footer>
		</div>
	);
}

export default App;