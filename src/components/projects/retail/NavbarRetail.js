import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function StoreNavbar() {
	return (
		<Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
			<Navbar.Brand>WELCOME TO MY STORE</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='mr-auto'>
					<Button className='nav-item' variant='outline-secondary'>
						<Link to='/project2' className='nav-link'>
							Products
						</Link>
					</Button>
					<Button className='nav-item' variant='outline-secondary'>
						<Link className='nav-link' to='/project2/cart'>
							<FontAwesomeIcon
								icon={faShoppingCart}
								color='#fff'
							></FontAwesomeIcon>
						</Link>
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
