import React from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default function Cart(props) {
	return (
		<section className='text-white'>
			<ProductConsumer>
				{value => {
					const { cart } = value;
					if (cart.length > 0) {
						return (
							<React.Fragment>
								<h1 className='p-5'>Your Cart</h1>
								<CartColumns></CartColumns>
								<CartList value={value}></CartList>
								<CartTotals value={value} history={props.history}></CartTotals>
							</React.Fragment>
						);
					} else {
						return <EmptyCart></EmptyCart>;
					}
				}}
			</ProductConsumer>
		</section>
	);
}
