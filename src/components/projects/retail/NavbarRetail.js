import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function StoreNavbar() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand className='navbar-brand'>WELCOME TO MY STORE</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className=''>
					<ul className='navbar-nav mx-auto mt-2 mt-lg-0'>
						<Button className='nav-item' variant='outline-secondary'>
							<Link to='/projects/2' className='nav-link'>
								Products
							</Link>
						</Button>
						<Button className='nav-item' variant='outline-secondary'>
							<Link className='nav-link' to='/projects/2/cart'>
								<i
									className='fa fa-shopping-cart text-white'
									aria-hidden='true'
								></i>
							</Link>
						</Button>
					</ul>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
