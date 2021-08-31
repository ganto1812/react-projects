import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import axios from 'axios';
import './Todolist.scss';

export default class Todolist extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos/?_limit=6')
			.then(res => this.setState({ todos: res.data }));
	}

	//Todo toggle complete
	markComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	//Delete Todo
	delTodo = id => {
		axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
			this.setState({
				todos: this.state.todos.filter(todo => todo.id !== id)
			})
		);
	};

	//Add Todo
	addTodo = title => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos/', {
				title,
				completed: false
			})
			.then(res => {
				res.data.id = this.state.todos.length + 1;
				this.setState({ todos: [...this.state.todos, res.data] });
			});
	};

	render() {
		return (
			<div className='col-xl-3 col-md-5 mx-auto p-0 bg-dark'>
				<h1 className='title'>To do list!</h1>
				<AddTodo addTodo={this.addTodo}></AddTodo>
				<Todos
					todos={this.state.todos}
					markComplete={this.markComplete}
					delTodo={this.delTodo}
				></Todos>
			</div>
		);
	}
}
