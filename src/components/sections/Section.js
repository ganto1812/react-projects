import React from 'react';
import spadeOnly from './spadeonly.svg';
// import About from './About';

export default function Section({ sectionName }) {
	return (
		<div className='section'>
			<a href="https://ana-portfolio-2021.netlify.app">
			<img src="/images/about/name.svg" alt="icon" className="text-center d-inline my-3" width="200"/>
			</a>
			<img
				src={spadeOnly}
				id='sectionSpade1'
				className='sectionSpade mx-auto'
				alt='spade'
			/>
			<h1>{sectionName}</h1>
		</div>
	);
}
