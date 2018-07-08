var React = require('react');


var TodoItem = function(props) {
	var todoItem = props.todoItem;
	return(
		<li className="list-group-item">
			<h3>
				<input 
					className="pull-left" 
					type="checkbox" 
					checked={todoItem.completed}
					value={todoItem.id}
					onChange={props.onCheckboxClick}
				/>
				{todoItem.todo}
				<button 
					className="btn btn-default btn-danger pull-right"
					onClick={props.onDeleteBtnClick}
					value={props.id}
				>
					Delete
				</button>	
			</h3>
		</li>
	);
};


module.exports = TodoItem;
