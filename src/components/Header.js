import React from 'react';
import logo from './logo.svg';
import name from './name.svg';

export default function Header() {
	return (
		<header className='section header' id='home'>
			{/* Big Antonella Pisani and Logo */}
			<div className='nameAndLogo'>
				<img
					src={name}
					alt='Antonella Pisani'
					className='name img-fluid p-5 mt-5'
				/>
				<img
					src={logo}
					alt='spade logo'
					className='logo img-fluid px-5 mx-auto'
				/>
			</div>
		</header>
	);
}
