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
									src={'/images/projects/retail/' + img}
									alt='product'
									className='img-fluid'
								/>
								<p>{title}</p>
								<p className='text-muted'>Price : £{price}</p>
							</Modal.Body>
							<Modal.Footer className='flex'>
								<Link
									to='/projects/2'
									onClick={() => closeModal()}
									className='mx-auto btn btn-outline-success'
									variant=''
								>
									Continue shopping
								</Link>
								<Link
									to='/projects/2/cart'
									onClick={() => closeModal()}
									className='mx-auto btn btn-outline-info'
								>
									Go to cart
								</Link>
							</Modal.Footer>
						</Modal>
					);
				}
			}}
		</ProductConsumer>
	);
}
