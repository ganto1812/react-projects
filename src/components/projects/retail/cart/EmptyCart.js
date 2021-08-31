import React from 'react';
import emptycart from './emptycart.png';

export default function EmptyCart() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-10 mx-auto text-center'>
					<h1 className='text-capitalize'>oh no!</h1>
					<h2 className='text-capitalize'>your cart is currently empty</h2>
					<img
						src={emptycart}
						alt='empty'
						className='mx-auto img-fluid p-5 m-5'
					/>
					<p className='mb-5'>
						Head back to products and add something to your cart
					</p>
				</div>
			</div>
		</div>
	);
}
