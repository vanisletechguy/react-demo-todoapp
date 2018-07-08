var React = require('react');

class TodoForm extends React.Component{
	constructor(props) {
		super(props);
		this.state= {
			todoText: ''
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleRefInputEvt = this.handleRefInputEvt.bind(this);
		this.handleInputTextChangeEvt = this.handleInputTextChangeEvt.bind(this);
	}

	handleFormSubmit(evt) {
		evt.preventDefault();
		this.props.onNewTodoItem(this.state.todoText);
		//	this.inputRef.value = '';
		this.setState(function() {
			return {
				todoText: ''
			};
		});
	}

	handleInputTextChangeEvt(evt) {
		var todoText = evt.target.value;
		this.setState(function() {
			return {
				todoText: todoText
			};
		});
	}
	handleRefInputEvt(inputRef){
		inputRef.focus();
	}
	render() {
		return(
			<form className="form-group" onSubmit={this.handleFormSubmit}>
				<input 
					type="text" 
					className="form-control" 
					placeholder = "Add TodoItem" 
					ref={this.handleRefInputEvt}
					value={this.state.todoText}
					onChange={this.handleInputTextChangeEvt}
				/>
			</form>
		);
	}
}
module.exports = TodoForm;
