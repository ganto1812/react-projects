import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from './context';
import PropTypes from 'prop-types';
import { ButtonToolbar, Button } from 'react-bootstrap';
import ModalRetail from './ModalRetail';

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;

		return (
			<div className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
				<div className='card'>
					<ProductConsumer>
						{value => (
							<div
								className='img-container'
								onClick={() => value.handleDetail(id)}
							>
								<Link to='/projects/2/details'>
									<img
										src={'/images/projects/retail/' + img}
										alt='product'
										className='img-fluid card-image-top'
									/>
								</Link>
								<Button
									variant='outline-success'
									className='cart-btn'
									disabled={inCart ? true : false}
									onClick={() => {
										value.addToCart(id);
										value.openModal(id);
									}}
								>
									{inCart ? (
										<p className='text-capitalize m-0' disabled>
											{' '}
											in cart
										</p>
									) : (
										<span data-target='#ModalCenter'>+</span>
									)}
								</Button>
								<ButtonToolbar>
									<ModalRetail
										show={value.modalOpen}
										onHide={() => value.closeModal()}
									/>
								</ButtonToolbar>
							</div>
						)}
					</ProductConsumer>
					{/* card footer */}
					<div className='card-footer d-flex justify-content-between'>
						<p className='align-self-center m-0 productTitle'>{title}</p>
						<h5 className='text-blue font-italic mb-0'>
							<span className='mr-1'>£</span>
							{price}
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

Product.protoTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
};
