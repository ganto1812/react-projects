import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function StoreNavbar() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand className='navbar-brand'>WELCOME TO MY STORE</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
						<li className='nav-item btn btn-outline-secondary'>
							<Link to='/projects/react/2' className='nav-link'>
								Products
							</Link>
						</li>
					</ul>
					<form className='form-inline my-2 my-lg-0'>
						<button
							className='btn btn-outline-secondary my-2 my-sm-0'
							type='submit'
						>
							<Link className='nav-link' to='/projects/react/2/cart'>
								<i
									className='fa fa-shopping-cart text-white'
									aria-hidden='true'
								></i>
							</Link>
						</button>
					</form>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
