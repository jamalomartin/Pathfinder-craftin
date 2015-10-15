'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var CraftingStore = require('../stores/CraftingStore');
var CraftingActionCreators = require('../actions/CraftingActionCreators');



var data = [];
var sSorcerer = [];

var SpellData = require('./Spelldata');

(function sData() {
	data = SpellData.getSpellType();
	sSorcerer.push({name: 'Select a Sorcerer spell'});
	data.forEach(function(dataObj) {
		if (dataObj.sor !== 'NULL') {
			sSorcerer.push(dataObj);
		}
	})
})()


var SorcererScrolls = React.createClass({
	mixins: [Reflux.connect(CraftingStore)],

	getInitialState: function() {
		return {
			spellName: '',
			spellCopies: '',
			casterLevel: '',
			sorcererSpell: sSorcerer
		};
	},
	craftScroll: function(e) {
		e.preventDefault();
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
	render: function () {
		var casterSpells = [];
		var casterSpell = this.state.sorcererSpell;

		if (casterSpell !== undefined) {
			casterSpells = casterSpell;
		} else {
			casterSpells = [{name: 'none'}];
		}

		var spell = casterSpell.map(function (spell, rank) {
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

module.exports = SorcererScrolls;
