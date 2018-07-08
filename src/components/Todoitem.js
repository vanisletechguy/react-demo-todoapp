var React = require('react');


var TodoItem = function(props) {
	return(
		<li className="list-group-item">
			<h3>
				<input 
					className="pull-left" 
					type="checkbox" 
					checked={props.completed}
					value={props.id}
					onChange={props.onCheckboxClick}
				/>
				{props.todo}
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
