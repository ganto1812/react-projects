import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default class TodoItem extends Component {
	render() {
		const { id, title, completed } = this.props.todo;

		return (
			<div>
				<p
					key={id}
					style={
						completed
							? { textDecoration: 'line-through' }
							: { textDecoration: 'none' }
					}
					className='todoItem'
				>
					<input
						type='checkbox'
						onChange={this.props.markComplete.bind(this, id)}
						checked={completed}
					/>{' '}
					{title}
					<Button
						onClick={this.props.delTodo.bind(this, id)}
						className='ml-4'
						variant='outline-danger'
					>
						x
					</Button>
				</p>
			</div>
		);
	}
}

//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
};
