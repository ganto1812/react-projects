import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from './context';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<h1 className='h1 text-white pt-2'>Online Store</h1>
				<div className='row'>
					<ProductConsumer>
						{value => {
							return value.products.map(product => {
								return <Product key={product.id} product={product}></Product>;
							});
						}}
					</ProductConsumer>
				</div>
			</React.Fragment>
		);
	}
}
