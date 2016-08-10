var React = require('react');

var Row = React.createClass({
  	handleClick: function(event) {
    	//this.setState({liked: !this.state.liked});
    	
    	var Name = this.props.name;
    	var Id = this.props.index;
    	var city = this.props.city;
    	alert('you click: '+ Name +' from '+city);

 	},
	render : function(){
		return(
			//each component should be wrapped in one parent element
			<tr onClick={this.handleClick} >
     		<td>{this.props.index}</td>
      	<td>{this.props.name}</td>
      	<td>{this.props.city}</td>
  		</tr>
		)
	}
});

var Table = React.createClass({
	render : function(){
		var rowsCol = this.props.rows.map((rowData, i) => <Row key={i} index={i} name={rowData.name} city={rowData.city} /> )
		//var text = this.state.liked ? 'like' : 'haven\'t liked';
		//var textButtton = this.state.liked ? 'unlike' : 'like!';
		return(
			<table className="table table-hover">
			    <thead>
			      <tr>
			        <th>{this.props.titles[0]}</th>
			        <th>{this.props.titles[1]}</th>
			        <th>{this.props.titles[2]}</th>
			      </tr>
			    </thead>
				<tbody>
				    {rowsCol}
				</tbody>
			</table>
		)
	}
})

export default Table;
