'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Button = require('react-bootstrap').Button;
var ButtonInput = require('react-bootstrap').ButtonInput;
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Well = require('react-bootstrap').Well;
var CraftingStore = require('../stores/CraftingStore');
var CraftingActionCreators = require('../actions/CraftingActionCreators');
var Scrolldisplay = require('./Scrolldisplay');


// Json data
var SpellData = require('./Spelldata');

require('styles/Scrollgrid.scss');



var Scrollgrid = React.createClass({
	mixins: [Reflux.connect(CraftingStore)],

	getInitialState: function() {
		return {
			spellName: '',
			spellCopies: '',
			onCasterLevelChanged: '',
			number:''
		};
	},
	craftScroll: function(e) {
		e.preventDefault();
		var nextNumber = '';
		var newScroll = {
			spellName: this.state.spellName,
			spellCopies: this.state.spellCopies,
			casterLevel: this.state.casterLevel
		};
		CraftingActionCreators.craftscroll(newScroll);

	},
	onSpellNameChanged: function(e) {
		this.setState({spellName: e.target.value});
	},
	onCopiesChanged: function(e) {
		this.setState({spellCopies: e.target.value});
	},
	onCasterLevelChanged: function(e) {
		this.setState({casterLevel: e.target.value});
	},
	onPaladin: function() {
		var paladin = SpellData.getSpellType();
		var paladinSpell = [];

		paladinSpell.push({name: 'Select a Paladin spell'});
		paladin.forEach(function(paladinObj) {
			if (paladinObj.paladin !== 'NULL') {
				paladinSpell.push(paladinObj);
			}
		});
		this.replaceState({paladinSpell: paladinSpell})
	},
	onWizard: function() {
		var wizard = SpellData.getSpellType();
		var wizardSpell = [];

		wizardSpell.push({name: 'Select a Wizard spell'});
		wizard.forEach(function(wizardObj) {
			if (wizardObj.wiz !== 'NULL') {
				wizardSpell.push(wizardObj);
			}
		});
		this.replaceState({wizardSpell: wizardSpell})
	},
	render: function () {
		var casterSpell = [];
		var selectedPaladinSpell = this.state.paladinSpell;
		var selectedWizardSpell = this.state.wizardSpell;
		var casterSpells;
		casterSpell = selectedPaladinSpell || selectedWizardSpell;

		if (casterSpell !== undefined) {
			casterSpells = casterSpell;
		} else {
			casterSpells = [{name: 'none'}];
		}
		var spell = casterSpells.map(function (spell, rank) {
			return (
					<option key={rank}>{spell.name}</option>
			);
		});
		return (
			<div>
				<form onSubmit={this.craftScroll}>
					<Button bsStyle='primary' onClick={this.onPaladin}>Paladin</Button>
					<Button className='button-spaceing' bsStyle='primary' onClick={this.onWizard}>Wizard</Button>
					<Input label="Spell Name" ref='spellName' type="select" onChange={this.onSpellNameChanged}>{spell}</Input>
					<Input label="Caster Level" ref='casterLevel' id='casterLevel' type="select" onChange={this.onCasterLevelChanged}>
						<option>Select caster level</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
						<option>9</option>
						<option>10</option>
						<option>11</option>
						<option>12</option>
						<option>13</option>
						<option>14</option>
						<option>15</option>
						<option>16</option>
						<option>17</option>
						<option>18</option>
						<option>19</option>
						<option>20</option>
					</Input>
					<Input label="Number of Copies" ref='spellCopies' type="text" value={this.state.number} placeholder="Enter number of copies" onChange={this.onCopiesChanged}/>
					<ButtonInput type='submit' value='Scribe Scroll' bsStyle='primary'></ButtonInput>
				</form>
				<Well>
					<Scrolldisplay></Scrolldisplay>
				</Well>
			</div>
		);
	}
});

module.exports = Scrollgrid;
