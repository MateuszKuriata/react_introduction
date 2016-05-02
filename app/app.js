import React from 'react';
import ReactDom from 'react-dom';
import articlesData from './ArticlesData.js';
import Button from './Buttons.js';
import MyTable from './Table.js';


var Main = React.createClass({
	// function mySortFunc(a, b, order){   //order is desc or asc
	//     return a.count - b.count;
	// }
	// constructor: function(){

	// },
	render : function(){
	var ButtLike = <Button type="button" title="like this" />;
	var titles = ['ID','Imie','Nazwisko'];
    return(
			<div  className="jumbotron">
				<div className="container text-center">
					<h1>Welcome on the ReactJS tutorial22</h1>
					{ButtLike}
				</div>
				<MyTable rows={articlesData} titles={titles} />
			</div>
		)
	}
});

// export default class Main extends React.Component{

// 	render (){
// 		var ButtLike = <Button type="button" title="like this" />;
// 		var titles = ['ID','Imie','Nazwisko'];
// 		return(
// 			<div  className="jumbotron">
// 				<div className="container text-center">
// 					<h1>Welcome on the ReactJS tutorial es6</h1>
// 					{ButtLike}
// 				</div>
// 				<MyTable rows={articlesData} titles={titles} />
// 			</div>
// 		)
// 	}
// }

ReactDom.render(<Main/>,document.getElementById('app'))
ReactDom.render(<Main/>,document.getElementById('app2'))