import React from 'react';


var Button = React.createClass({
	
	getInitialState: function() {
    	return {liked: false};
  	},
  	handleClick: function(event) {
    	this.setState({liked: !this.state.liked});
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

export default Button;