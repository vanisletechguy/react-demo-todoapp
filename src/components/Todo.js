var React = require('react');
var TodoForm = require('./TodoForm');
var FilterLinks = require('./FilterLinks');
var TodoList = require('./TodoList');
var TodosCount = require('./TodosCount');
var constants = require('../constants');
var ALL = constants.ALL;
var ACTIVE = constants.ACTIVE;
var COMPLETED = constants.COMPLETED;

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentFilter: ALL,
			todos: []
		};
		
		this.handleNewTodoItem = this.handleNewTodoItem.bind(this);
		this.handleDeleteBtnClick = this.handleDeleteBtnClick.bind(this);
		this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
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
	handleFilterChange(evt, currentFilter) {
		evt.preventDefault();
		console.log(currentFilter);

		this.setState(function() {
			return {
				currentFilter: currentFilter
			};
		});
	}
	filterTodos() {
		var todos =this.state.todos;
		var currentFilter = this.state.currentFilter;
		var filteredTodos = [];
		for (var i=0; i < todos.length; ++i) {
			var todoItem = todos[i];
			if (currentFilter === COMPLETED && !todoItem.completed) {
				continue;
			}
			else if(currentFilter === ACTIVE && todoItem.completed){
				continue;
			}
			filteredTodos.push(todoItem);
		}
		return filteredTodos;
	}
	render() {
		var todos = this.filterTodos();
		return(
			<div>
				<TodoForm onNewTodoItem={this.handleNewTodoItem} />
				<FilterLinks 
					currentFilter={this.state.currentFilter} 
					onFilterChange={this.handleFilterChange} 
				/>
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
