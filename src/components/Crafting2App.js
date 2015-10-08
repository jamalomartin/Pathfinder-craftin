'use strict';

var React = require('react/addons');

var Nav = require('react-bootstrap').Nav;
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var Well = require('react-bootstrap').Well;
var ReactTransitionGroup = React.addons.TransitionGroup;

var ScrollGrid = require('./Scrollgrid');
var Wand = require('./Wand');

// CSS
require('normalize.css');
require('../styles/main.css');
require('../styles/bootstrap.css');

// var imageURL = require('../images/images.jpeg');

var Crafting2App = React.createClass({
	getInitialState: function() {
		return {activeKey: 1};
	},
	selectScrollTab: function() {
		this.setState({activeKey: 1});
	},
	selectWandTab: function() {
		this.setState({activeKey: 2});
	},
	render: function() {
		var crafting = <ScrollGrid/>;
		if (this.state.activeKey === 2) {
			crafting = <Wand/>;
		}
		return (
			<div className="main">
				<ReactTransitionGroup transitionName="fade">
				</ReactTransitionGroup>
				<Well>
					<Navbar>
						<Nav>
							<NavItem className={this.state.activeKey === 1 ? 'active' : ''}
								eventKey={1}
								onClick={this.selectScrollTab}>
								Scroll
							</NavItem>
							<NavItem className={this.state.activeKey === 2 ? 'active' : ''}
								eventKey={2}
								onClick={this.selectWandTab}>
								Wand
							</NavItem>
						</Nav>
					</Navbar>
					{crafting}
				</Well>
			</div>
		);
	}
});

module.exports = Crafting2App;
