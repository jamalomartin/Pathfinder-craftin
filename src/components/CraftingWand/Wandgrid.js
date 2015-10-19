'use strict';

var React = require('react/addons');
var Row = require('react-bootstrap').Row;
var Button = require('react-bootstrap').Button;
var ButtonGroup = require('react-bootstrap').ButtonGroup;
var Input = require('react-bootstrap').Input;
var Well = require('react-bootstrap').Well;

var WandDisplay = require('./WandDisplay');
var PaladinWand = require('./PaladinWand');
var WizardWand = require('./WizardWand');
var BardWand = require('./BardWand');
var RangerWand = require('./RangerWand');
var SorcererWand = require('./SorcererWand');
var ClericWand = require('./ClericWand');
var DruidWand = require('./DruidWand');


var Wandgrid = React.createClass({

	getInitialState: function() {
		return {
			activeKey: 1
		};
	},
	selectPaladinWand: function() {
		this.setState({activeKey: 1});
	},
	selectWizardWand: function() {
		this.setState({activeKey: 2});
	},
	selectBardWand: function() {
		this.setState({activeKey: 3});
	},
	selectRangerWand: function() {
		this.setState({activeKey: 4});
	},
	selectSorcererWand: function() {
		this.setState({activeKey: 5});
	},
	selectClericWand: function() {
		this.setState({activeKey: 6});
	},
	selectDruidWand: function() {
		this.setState({activeKey: 7});
	},
	render: function () {
		var wands = <PaladinWand/>;
		if (this.state.activeKey === 1) {
			wands = <PaladinWand/>;
		} else if (this.state.activeKey === 2) {
			wands = <WizardWand/>;
		} else if (this.state.activeKey === 3) {
			wands = <BardWand/>;
		}  else if (this.state.activeKey === 4) {
			wands = <RangerWand/>;
		}  else if (this.state.activeKey === 5) {
			wands = <SorcererWand/>;
		} else if (this.state.activeKey === 6) {
			wands = <ClericWand/>;
		} else if (this.state.activeKey === 7) {
			wands = <DruidWand/>;
		}
		return (
			<div>
				<div className="button-centering">
					<ButtonGroup>
						<Button bsStyle="primary" className={this.state.activeKey === 1 ? 'active' : ''} eventKey={1} onClick={this.selectPaladinWand}>Paladin Wand</Button>
						<Button bsStyle="primary" className={this.state.activeKey === 2 ? 'active' : ''} eventKey={2} onClick={this.selectWizardWand}>Wizard Wand</Button>
						<Button bsStyle="primary" className={this.state.activeKey === 3 ? 'active' : ''} eventKey={3} onClick={this.selectBardWand}>Bard Wand</Button>
						<Button bsStyle="primary" className={this.state.activeKey === 4 ? 'active' : ''} eventKey={4} onClick={this.selectRangerWand}>Ranger Wand</Button>
						<Button bsStyle="primary" className={this.state.activeKey === 5 ? 'active' : ''} eventKey={5} onClick={this.selectSorcererWand}>Sorcerer Wand</Button>
						<Button bsStyle="primary" className={this.state.activeKey === 6 ? 'active' : ''} eventKey={6} onClick={this.selectClericWand}>Cleric Wand</Button>
						<Button bsStyle="primary" className={this.state.activeKey === 7 ? 'active' : ''} eventKey={7} onClick={this.selectDruidWand}>Druid Wand</Button>
					</ButtonGroup>
				</div>
				<Well>
					{wands}
				</Well>
				<Well>
					<WandDisplay></WandDisplay>
				</Well>
			</div>
		);
	}
});

module.exports = Wandgrid;
