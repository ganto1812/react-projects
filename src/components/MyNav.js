import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function MyNav() {
	return (
		<Navbar
			collapseOnSelect
			expand='md'
			fixed='top'
			className='navbar fixed-top navbar-expand-lg navbar-dark p-0'
			id='navbar'
		>
			<Navbar.Brand className='navbar-brand px-3'>Menu</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Link to='/' className='nav-link px-3'>
						Home
					</Link>
					<Link to='/about' className='nav-link px-3'>
						About
					</Link>
					<Link to='/projects' className='nav-link px-3'>
						Projects
					</Link>
					<Link to='/contact' className='nav-link px-3'>
						Contact
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
