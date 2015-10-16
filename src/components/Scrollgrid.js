'use strict';

var React = require('react/addons');
var Row = require('react-bootstrap').Row;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var Well = require('react-bootstrap').Well;

var Scrolldisplay = require('./Scrolldisplay');
var PaladinScrolls = require('./PaladinScrolls');
var WizardScrolls = require('./WizardScrolls');
var BardScrolls = require('./BardScrolls');
var RangerScrolls = require('./RangerScrolls');
var SorcererScrolls = require('./SorcererScrolls');
var ClericScrolls = require('./ClericScrolls');
var DruidScrolls = require('./DruidScrolls');

require('styles/Scrollgrid.scss');


var Scrollgrid = React.createClass({

	getInitialState: function() {
		return {
			activeKey: 1
		};
	},
	selectPaladinScroll: function() {
		this.setState({activeKey: 1});
	},
	selectWizardScroll: function() {
		this.setState({activeKey: 2});
	},
	selectBardScroll: function() {
		this.setState({activeKey: 3});
	},
	selectRangerScroll: function() {
		this.setState({activeKey: 4});
	},
	selectSorcererScroll: function() {
		this.setState({activeKey: 5});
	},
	selectClericScroll: function() {
		this.setState({activeKey: 6});
	},
	selectDruidScroll: function() {
		this.setState({activeKey: 7});
	},
	render: function () {
		var scrolls = <PaladinScrolls/>;
		if (this.state.activeKey === 2) {
			scrolls = <WizardScrolls/>;
		} else if (this.state.activeKey === 3) {
			scrolls = <BardScrolls/>;
		} else if (this.state.activeKey === 4) {
			scrolls = <RangerScrolls/>;
		} else if (this.state.activeKey === 5) {
			scrolls = <SorcererScrolls/>;
		} else if (this.state.activeKey === 6) {
			scrolls = <ClericScrolls/>;
		} else if (this.state.activeKey === 7) {
			scrolls = <DruidScrolls/>;
		}
		return (
			<div>
				<Button bsStyle="primary" className={this.state.activeKey === 1 ? 'active' : ''} eventKey={1} onClick={this.selectPaladinScroll}>Paladin</Button>
				<Button bsStyle="primary" className={this.state.activeKey === 2 ? 'active' : '', 'button-spaceing'} eventKey={2} onClick={this.selectWizardScroll}>Wizard</Button>
				<Button bsStyle="primary" className={this.state.activeKey === 3 ? 'active' : '', 'button-spaceing'} eventKey={3} onClick={this.selectBardScroll}>Bard</Button>
				<Button bsStyle="primary" className={this.state.activeKey === 4 ? 'active' : '', 'button-spaceing'} eventKey={4} onClick={this.selectRangerScroll}>Ranger</Button>
				<Button bsStyle="primary" className={this.state.activeKey === 5 ? 'active' : '', 'button-spaceing'} eventKey={5} onClick={this.selectSorcererScroll}>Sorcerer</Button>
				<Button bsStyle="primary" className={this.state.activeKey === 6 ? 'active' : '', 'button-spaceing'} eventKey={6} onClick={this.selectClericScroll}>Cleric</Button>
				<Button bsStyle="primary" className={this.state.activeKey === 7 ? 'active' : '', 'button-spaceing'} eventKey={7} onClick={this.selectDruidScroll}>Druid</Button>
				<Well>
					{scrolls}
				</Well>
				<Well>
					<Scrolldisplay></Scrolldisplay>
				</Well>
			</div>
		);
	}
});

module.exports = Scrollgrid;
