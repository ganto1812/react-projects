import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	render() {
		const { id, title } = this.props.todo;

		return (
			<div>
				<p key={id} style={this.getStyle()} className='todoItem'>
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
