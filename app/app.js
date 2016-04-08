var React = require('react');
var ReactDom = require('react-dom');


var Main = React.createClass({
	render : function(){
		return(
			<div  className="jumbotron text-center">
				<h1>Welcome on the ReactJS tutorial</h1>
			</div>
		)
	}
});

var Button = React.createClass({
	render : function(){
		return(
			<button type="button" className="btn btn-primary">Get started</button>
		)
	}
});

var ButtonsCollection = [Button,Button,Button];

ReactDom.render(<Main/>,document.getElementById('app'))