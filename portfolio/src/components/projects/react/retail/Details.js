import React from 'react';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';

export default function Details() {
	return (
		<ProductConsumer>
			{value => {
				const {
					id,
					company,
					img,
					info,
					price,
					title,
					inCart
				} = value.detailProduct;
				return (
					<div className='container py-5'>
						{/* title */}
						<div className='row'>
							<div className='col-10 mx-auto text-center text-white my-5'>
								<h1>{title}</h1>
							</div>
						</div>
						{/* end title */}
						{/* product info */}
						<div className='row'>
							<div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
								<img
									src={'/images/projects/react/retail/' + img}
									alt='product'
									className='img-fluid'
								/>
							</div>
							{/* product text */}
							<div className='col-10 mx-auto col-md-6 my-3 text-capitalize text-white'>
								<h1 className='h2'>model : {title}</h1>
								<h2 className='h4 text-title text-uppercase text-muted mt-3 mb-2'>
									made by: <span className='uppercase'>{company}</span>
								</h2>
								<strong>
									price : <span>£</span>
									{price}
								</strong>

								<p className='text-capitalize font-weight-bold mt-3 mb-0'>
									some info about product :
								</p>
								<p className='text-muted lead'>{info}</p>
								{/* buttons */}
								<div>
									<Link to='/projects/react/2'>
										<button className='btn btn-outline-primary mr-2'>
											Back To Products
										</button>
									</Link>
									<Link to='/projects/react/2/cart'>
										<button
											className='btn btn-outline-success'
											disabled={inCart ? true : false}
											onClick={() => {
												value.addToCart(id);
												value.openModal(id);
											}}
										>
											{inCart ? 'in Cart' : 'add to cart'}
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				);
			}}
		</ProductConsumer>
	);
}
