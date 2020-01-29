import React from 'react';
import { Button } from 'react-bootstrap';

export default function CartItem({ item, value }) {
	const { id, title, img, price, total, count } = item;
	const { increment, decrement, removeItem } = value;
	return (
		<div className='row my-1 text-capitalize text-center align-items-center'>
			<div className='col-10 mx-auto col-lg-2'>
				<img
					src={'/images/projects/react/retail/' + img}
					alt='product'
					className='img-fluid'
				/>
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<span className='d-lg-none'>product : </span>
				{title}
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<span className='d-lg-none'>price : </span>£{price}
			</div>
			<div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
				<div className=''>
					<div className='row mx-auto d-flex align-items-center justify-content-center'>
						<Button
							onClick={() => decrement(id)}
							variant='outline-success'
							className='col-4'
						>
							-
						</Button>
						<div className='col-4'>
							<span>{count}</span>
						</div>
						<Button
							onClick={() => increment(id)}
							variant='outline-success'
							className='col-4'
						>
							+
						</Button>
					</div>
				</div>
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<Button onClick={() => removeItem(id)}>
					<i className='fa fa-trash-o' aria-hidden='true'></i>
				</Button>
			</div>
			<div className='col-10 mx-auto col-lg-2'>
				<strong>item total : £{total}</strong>
			</div>
		</div>
	);
}
