import React from 'react';
import StoreNavbar from './NavbarRetail';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './cart';
import ModalRetail from './ModalRetail';
import Default from './Default';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductProvider } from './context';
import './retail.scss';

export default function Retail() {
	return (
		<div className='container p-0 mt-5'>
			<ProductProvider>
				<Router>
					<StoreNavbar></StoreNavbar>
					<div className='container'>
						<Switch>
							<Route
								exact
								path='/project2'
								component={ProductList}
							></Route>
							<Route
								path='/project2/details'
								component={Details}
							></Route>
							<Route path='/project2/cart' component={Cart}></Route>
							<Route component={Default}></Route>
						</Switch>
						<ModalRetail></ModalRetail>
					</div>
				</Router>
			</ProductProvider>
		</div>
	);
}
