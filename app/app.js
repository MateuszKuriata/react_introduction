var React = require('react');
var ReactDom = require('react-dom');
var ArticlesData = require('./ArticlesData.json');

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
			<div>
				<button type="button" onClick={this.handleClick} className="btn btn-primary">{this.props.title}</button>
				<p>{text}</p>
			</div>
		)
	}
});
var Main = React.createClass({
	render : function(){
	var Buttonas = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Button key={i} type="button" index={i} title={title} /> );

    console.log(ArticlesData);

    Buttonas.push(<Button key={77} type="button" index={77} title={'adam lambert'} />);

		return(
			<div  className="jumbotron text-center">
				<h1>Welcome on the ReactJS tutorial</h1>
				{Buttonas}
			</div>
		)
	}
});



ReactDom.render(<Main/>,document.getElementById('app'))