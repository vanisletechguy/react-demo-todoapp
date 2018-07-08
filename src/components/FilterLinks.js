var React = require('react');
var constants = require('../constants');
var ALL = constants.ALL;
var ACTIVE = constants.ACTIVE;
var COMPLETED = constants.COMPLETED;

var Link = function(props) {
	var currentFilter = props.currentFilter;
	var filterName = props.filterName;

	var linkStyle = {marginLeft: '3px', marginRight: '3px'}; 
	if(currentFilter === filterName) {
		linkStyle = {marginLeft: '3px', marginRight: '3px',
			backgroundColor: '#e6e6e6', borderColor: '#adadad', lineHeight: '1.5'};
	}
	return(
		<a 
			href="#" 
			className="btn btn-default btn-sm"
			style={linkStyle}
			onClick={function(evt) {props.onFilterChange(evt, filterName);}}
		>
			<strong>{props.children}</strong>
		</a>
	);
};
var FilterLinks = function(props) {
	return(
		<div style={{marginBottom: '30px'}}>
			{'Display: '}
			<Link 
				currentFilter={props.currentFilter} 
				filterName={ALL} 
				onFilterChange={props.onFilterChange}
			>
				{ALL}
			</Link>
			<Link currentFilter={props.currentFilter} 
				filterName={ACTIVE} 
				onFilterChange={props.onFilterChange}
			>
				{ACTIVE}
			</Link>
			<Link 
				currentFilter={props.currentFilter} 
				filterName={COMPLETED} 
				onFilterChange={props.onFilterChange}
			>
				{COMPLETED}
			</Link>
		</div>	
	);
};

module.exports = FilterLinks;
