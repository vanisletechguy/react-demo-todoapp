var React = require('react');
var TodoForm = require('./TodoForm');

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
	}
	handleNewTodoItem(todo) {
		this.setState(function(prevState) {
			var todos = prevState.todos.concat(todo);

			return {
				todos: todos
			}
		});
	}
	render() {
		return(
			<div>
			<TodoForm onNewTodoItem={this.handleNewTodoItem} />
			{this.state.todos}
			</div>
		);
	}
}

module.exports = Todo;
