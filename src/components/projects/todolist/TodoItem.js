import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
					/>{' '}
					{title}
					<button
						onClick={this.props.delTodo.bind(this, id)}
						className='ml-4 btn btn-danger rounded-circle'
					>
						x
					</button>
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
