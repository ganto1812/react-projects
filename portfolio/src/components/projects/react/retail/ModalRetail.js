import React from 'react';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
import { Modal, Button, Alert } from 'react-bootstrap';

export default function ModalRetail(props) {
	return (
		<ProductConsumer>
			{value => {
				const { modalOpen, closeModal } = value;
				const { img, title, price } = value.modalProduct;

				if (!modalOpen) {
					return null;
				} else {
					return (
						<Modal
							{...props}
							size='sm'
							aria-labelledby='contained-modal-title-vcenter'
							centered
							animation='true'
							backdropClassName='myModal'
						>
							<Modal.Body>
								<Alert variant='success'>
									Item added to cart{' '}
									<i className='fa fa-thumbs-o-up' aria-hidden='true'></i>
								</Alert>
								<img
									src={'/images/projects/react/retail/' + img}
									alt='product'
									className='img-fluid'
								/>
								<p>{title}</p>
								<p className='text-muted'>Price : £{price}</p>
							</Modal.Body>
							<Modal.Footer>
								<Link to='/projects/react/2'>
									<Button
										onClick={() => closeModal()}
										className='mr-3'
										variant='outline-success'
									>
										Continue shopping
									</Button>
								</Link>
								<Link to='/projects/react/2/cart'>
									<Button onClick={() => closeModal()} variant='outline-info'>
										Go to cart
									</Button>
								</Link>
							</Modal.Footer>
						</Modal>
					);
				}
			}}
		</ProductConsumer>
	);
}
