import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"
import _ from "lodash"
import { Grid, Row, Col } from "react-bootstrap";

const Star = (props) => {
	const numberOfStars = Math.floor(Math.random() * 9) + 1;
	// let stars = []
	// for (let i = 0; i < numberOfStars; i++) {
	// 	stars.push(<i key={i} className="fa fa-star"></i>);
	// }
	// return (
	// 	<Col md={5}>
	// 		<div className="container">
	// 			{stars}
	// 		</div>
	// 	</Col>
	// );
	return (
		<div className="col-md-5">
			{_.range(numberOfStars).map(i =>
				<i key={i} className="fa fa-star"></i>
			)}
		</div>

	);
}
const Button = (props) => {
	return (
		<div className="col-md-2"><button>=</button></div>
	);
}
const Answer = (props) => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) =>
      	<span key={i}>{number}</span>
      )}
    </div>
  );
};
const Number = (props) => {
	const numberClassName = (number) => {
		if(props.selectedNumbers.indexOf(number) >= 0){
			return 'Already selected' 
		}
	}
	return (
		<div className="card text-center">
			<div>
				{Number.list.map((number, i) =>
					<span key={i} className ={numberClassName(number)}>{number}</span>
				)}
			</div>
		</div>
	);
}
Number.list = _.range(1, 10);
class Game extends React.Component {
state = {
	selectedNumbers : [],
}
	render() {
		return (
			<Grid>
				<Row>
					<Col md={12}>
						<h1>Play Nine</h1>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Star />
						<Button />
						<Answer selectedNumbers ={this.state.selectedNumbers}/>
					</Col>
				</Row>
				<hr />
				<Row>
					<Number selectedNumbers={this.state.selectedNumbers}/></Row>


			</Grid>
		);
	}
}
class App extends React.Component {
	render() {
		return (
			<Game />
		);
	}
}
ReactDOM.render(
	<App />,
	document.getElementById("root")
)