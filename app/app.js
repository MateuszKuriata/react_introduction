var React = require('react');
var ReactDom = require('react-dom');
var articlesData = require('./ArticlesData.js');

var Button = React.createClass({
	
	getInitialState: function() {
    	return {liked: false};
  	},
  	handleClick: function(event) {
    	this.setState({liked: !this.state.liked});
    	//alert('aww yeah')
 	},
	render : function(){
		var text = this.state.liked ? 'like' : 'haven\'t liked';
		var textButtton = this.state.liked ? 'unlike' : 'like!';
		return(
			//each component should be wrappend in one closed element, c
			<div>
				<button type="button" onClick={this.handleClick} className="btn btn-primary">{this.props.title}</button>
				<p>{text}</p>
			</div>
		)
	}
});
//
// 3 rows
// @ id
// @ name
// @ city
//
var Row = React.createClass({
	
  	handleClick: function(event) {
    	//this.setState({liked: !this.state.liked});
    	//alert('aww yeah')
 	},
	render : function(){
		return(
			//each component should be wrappend in one closed element, c
			<tr onClick={this.handleClick} >
	       		<td>{this.props.index}</td>
	        	<td>{this.props.name}</td>
	        	<td>{this.props.city}</td>
      		</tr>
		)
	}
});

var Main = React.createClass({
	// function mySortFunc(a, b, order){   //order is desc or asc
	//     return a.count - b.count;
	// }
	render : function(){
	var ButtLike = <Button type="button" title="like this" />;
	console.log(articlesData)
    var rows = articlesData.map((rowData, i) => <Row key={i} index={i} name={rowData.name} city={rowData.city} /> )
    // .sort(function(a, b){
    // 	if(a.props.title < b.props.title) return -1;
    // 	if(a.props.title > b.props.title) return 1;
    // 	return 0;
    // });




    //Buttonas.push(<Button key={77} type="button" index={77} title={'adam lambert'} />);

		return(
			<div  className="jumbotron text-center">
				<h1>Welcome on the ReactJS tutorial</h1>
				{ButtLike}
				<table className="table table-hover">
				    <thead>
				      <tr>
				        <th>Id</th>
				        <th>Name</th>
				        <th>Email</th>
				      </tr>
				    </thead>
				    <tbody>
				    	{rows}
				    </tbody>
				  </table>
			</div>
		)
	}
});



ReactDom.render(<Main/>,document.getElementById('app'))