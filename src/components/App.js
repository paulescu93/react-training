import React, { Component } from 'react'

import img from '../imgs/witch_hat.png'

import Btn from './button/index.js'

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>{"This is the app"}</h1>
				<img src={img} alt="plank"/>
				<Btn name={'Button 1'} colour={'red'}/>
				<Btn name={'Button 2'} colour={'blue'}/>
			</div>
		)
	}
}
