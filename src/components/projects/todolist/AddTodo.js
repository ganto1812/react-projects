import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
	state = {
		title: ''
	};

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '' });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					type='text'
					name='title'
					placeholder='Add Todo ...'
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input type='submit' value='submit' className='btn btn-info' />
			</form>
		);
	}
}

AddTodo.protoTypes = {
	addTodo: PropTypes.func.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
};
