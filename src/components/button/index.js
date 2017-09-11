import React, { Component } from 'react'

import './styles.scss'

export default class Btn extends Component {
	render() {
		return (
			<div className={`Btn ${this.props.colour}`}>{this.props.name}</div>
		)
	}
}
