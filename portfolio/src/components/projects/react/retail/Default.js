import React from 'react';
import { Alert } from 'react-bootstrap';

export default function Default(props) {
	console.log(props);
	return (
		<div className='container text-white py-5 my-5'>
			<div className='row'>
				<div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
					<h1 className='display-3 my-1'>404</h1>
					<h1 className='mb-5'>error</h1>
					<h2 className='mb-5'>page not found</h2>
					<h3 className='mb-5'>
						the requested URL{' '}
						<Alert variant='danger' className='my-5'>
							{props.location.pathname}
						</Alert>{' '}
						was not found
					</h3>
				</div>
			</div>
		</div>
	);
}
