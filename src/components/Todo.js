var React = require('react');
var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');
var TodosCount = require('./TodosCount');

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		
		this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
		this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
	}
	handleNewTodoItem(todo) {
		this.setState(function(prevState) {
			var todos = prevState.todos.concat(todo);

			return {
				todos: todos
			};
		});
	}
	handleDeleteBtnClick(evt) {
		var index = Number(evt.target.value);
		this.setState(function(prevState) {
			var todos = prevState.todos;
			todos = todos.slice(0, index).concat(todos.slice(index+1));

			return {
				todos: todos
			};
		});
	}
	render() {
		var todos = this.state.todos;
		return(
			<div>
				<TodoForm onNewTodoItem={this.handleNewTodoItem} />
				<TodoList 
					todos={todos} 
					onDeleteBtnClick={this.handleDeleteBtnClick}
				/>
				<TodosCount todosCount={todos.length} />
			</div>
		);
	}
}

module.exports = Todo;
