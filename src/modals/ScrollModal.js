'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var Modal = require('react-bootstrap').Modal;
var ModalDialog = require('react-bootstrap').ModalDialog;

var ScrollModal = React.createClass({

	getInitialState: function() {
		return { showModal: false };
	},

	close: function() {
		this.setState({ showModal: false });
	},

	open: function() {
		this.setState({ showModal: true });
	},
	render: function () {
		return (
			<div>HELLO</div>
		);
	}
});

module.exports = ScrollModal;
