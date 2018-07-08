var React = require('react');

class TodoForm extends React.Component{
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleRefInputEvt = this.handleRefInputEvt.bind(this);
		this.handleInputTextChangeEvt = this.handleInputTextChangeEvt.bind(this);
	}

	handleFormSubmit(evt) {
		evt.preventDefault();
		this.props.onNewTodoItem();
	}

	handleInputTextChangeEvt(evt) {
		var todoText = evt.target.value;
		this.props.onTodoSearch(todoText);
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
					placeholder = "Type to search or enter to add an item" 
					ref={this.handleRefInputEvt}
					value={this.props.todoText}
					onChange={this.handleInputTextChangeEvt}
				/>
			</form>
		);
	}
}
module.exports = TodoForm;
