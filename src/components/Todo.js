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
		this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
	}
	handleNewTodoItem(todo) {
		this.setState(function(prevState) {
			var todoItem = {
				todo: todo,
				id: Date.now().toString(),
				completed: false
			};
			var todos = prevState.todos.concat(todoItem);

			return {
				todos: todos
			};
		});
	}
	handleDeleteBtnClick(evt) {
		var id = evt.target.value;
		this.setState(function(prevState) {
			var todos = prevState.todos;
			var index = null;
			for(var i=0; i<todos.length; ++i) {
				if(todos[i].id === id) {
					index = i;
					break;
				}
			}
			todos = todos.slice(0, index).concat(todos.slice(index+1));
			return {
				todos: todos
			};
		});
	}
	handleCheckboxClick(evt) {
		var id = evt.target.value;
		this.setState(function(prevState) {
			var todos = prevState.todos;
			var index = null;
			for(var i=0; i<todos.length; ++i) {
				if(todos[i].id === id) {
					index = i;
					break;
				}
			}
			todos = (
				todos.slice(0, index)
					.concat([{
						todo: todos[index].todo,
						id: todos[index].id,
						completed: !todos[index].completed
					}])
					.concat(todos.slice(index+1))
			);
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
					onCheckboxClick={this.handleCheckboxClick}
				/>
				<TodosCount todosCount={todos.length} />
			</div>
		);
	}
}

module.exports = Todo;
