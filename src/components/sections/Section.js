import React from 'react';
import spadeOnly from './spadeonly.svg';
// import About from './About';

export default function Section({ sectionName }) {
	return (
		<div className='section'>
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
