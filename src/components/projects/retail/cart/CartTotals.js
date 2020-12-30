import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Paypal from './Paypal';

export default function CartTotals({ value, history }) {
	const { cartSubtotal, cartTax, cartTotal, clearCart } = value;

	return (
		<React.Fragment>
			<div className='container'>
				<div className='row'>
					<div
						className='col-10 mt-2 mb-5 ml-sm-5 ml-md-auto col-sm-8 text-capitalize
						text-right'
					>
						<Link to='/project2'>
							<Button onClick={() => clearCart()} variant='outline-danger'>
								Clear Cart
							</Button>
						</Link>
						<p>
							<span>
								Subtotal : <strong>£ {cartSubtotal}</strong>
							</span>
						</p>
						<p>
							<span>
								Tax : <strong>£ {cartTax}</strong>
							</span>
						</p>
						<p>
							<span>
								Total : <strong>£ {cartTotal}</strong>
							</span>
						</p>
						<Paypal
							total={cartTotal}
							clearCart={clearCart}
							history={history}
						></Paypal>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
