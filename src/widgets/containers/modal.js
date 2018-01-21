import React, { Component } from 'react';
import { createPortal } from 'react-dom';

export default class modalContainer extends Component {
	render(){
		return createPortal(this.props.children, document.getElementById('modal-container'))
	}
}