import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class Todos extends Component {
	render() {
		return this.props.todos.map((todo, id) => (
			<TodoItem
				todo={todo}
				markComplete={this.props.markComplete}
				delTodo={this.props.delTodo}
				key={id}
			></TodoItem>
		));
	}
}

//PropTypes
Todos.protoTypes = {
	todos: PropTypes.array.isRequired,
	markComplete: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired
};
