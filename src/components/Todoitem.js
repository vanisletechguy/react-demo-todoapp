var React = require('react');

var Todoitem = function(props) {
	return(
		<li className="list-group-item">
			<h3>
				{props.todo}
				<button 
					className="btn btn-default btn-danger pull-right"
					onClick={function() {props.onDeleteBtnClick(props.index);}}
				>
					Delete
				</button>	
			</h3>
		</li>
	);
};

module.exports = Todoitem;
