import React from 'react';
import Section from './Section';

export default function Contact() {
	return (
		<div>
			<Section sectionName='Contact Me' sectionId='contact' key='3'></Section>
			<p>If you want to get in contact with me leave me a message below</p>

			{/* Send me email */}
			<form
				method='post'
				name='contact'
				action='https://formspree.io/meypajzm'
				className='contact bg-dark text-light p-5 mt-5 col-md-6 offset-3'
				id='contact'
			>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						className='form-control m-0'
						required
					/>
				</div>
				<div className='form-group py-2 my-2'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='_replyto'
						className='form-control m-0'
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='message'>Message</label>
					<textarea
						name='message'
						className='form-control'
						rows='5'
						form='contact'
						required
					></textarea>
				</div>
				<br />
				<button
					id='button'
					className='btn btn-outline-light'
					type='submit'
					name='submit'
					value='Send'
				>
					✉ Send
				</button>
			</form>
		</div>
	);
}
