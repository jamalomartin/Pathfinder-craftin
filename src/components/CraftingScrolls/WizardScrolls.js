'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var CraftingStore = require('../../stores/CraftingStore');
var CraftingActionCreators = require('../../actions/CraftingActionCreators');



var wData = [];
var wizardData = [];
var data = [];
var sWizard = [];


var SpellData = require('./Spelldata');

(function sData() {
	wData = SpellData.getSpellType();
	wizardData.push({name: 'Select a Wizard spell'});
	wData.forEach(function(dObj) {
		if (dObj.wiz !== 'NULL') {
			wizardData.push({name: dObj.name, spellLevel: dObj.wiz});
		}
	})
})()



var WizardScrolls = React.createClass({
	init: function() {
        this.listenToMany(actions);
    },

	getInitialState: function() {
		return {
			spellName: '',
			spellCopies: '',
			casterLevel: '',
			wizardSpell: wizardData
		};
	},
	craftScroll: function(e) {
		e.preventDefault();
		var newScroll = {
			spellName: this.state.spellName,
			spellCopies: this.state.spellCopies,
			casterLevel: this.state.casterLevel,
			caster: 'wiz'
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
	render: function () {
		var casterSpells = [];
		var casterSpell = this.state.wizardSpell;

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
					<Input label="Number of Copies" ref='spellCopies' type="text" placeholder="Enter number of copies" onChange={this.onCopiesChanged}/>
					<ButtonInput type='submit' value='Scribe Scroll' bsStyle='primary'></ButtonInput>
				</form>
			</div>
		);
	}
});

module.exports = WizardScrolls;
