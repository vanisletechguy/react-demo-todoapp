var React = require('react');
var TodoForm = require('./TodoForm');
var TodoList = require('./TodoList');

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		
		this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
		this.handeDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
	}
	handleNewTodoItem(todo) {
		this.setState(function(prevState) {
			var todos = prevState.todos.concat(todo);

			return {
				todos: todos
			};
		});
	}
	handleDeleteBtnClick(index){
		console.log('Index: ', index);		
	}
	render() {
		return(
			<div>
				<TodoForm onNewTodoItem={this.handleNewTodoItem} />
				<TodoList todos={this.state.todos} onDeleteBtnClick={this.handleDeleteBtnClick}/>
			</div>
		);
	}
}

module.exports = Todo;
