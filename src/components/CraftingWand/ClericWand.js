'use strict';

var React = require('react/addons');
var Reflux = require('reflux');
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var WandCraftingStore = require('../../stores/WandCraftingStore');
var CraftingActionCreators = require('../../actions/CraftingActionCreators');



var data = [];
var sCleric = [];

var SpellData = require('../CraftingScrolls/Spelldata');

(function sData() {
	data = SpellData.getSpellType();
	sCleric.push({name: 'Select a Cleric spell'});
	data.forEach(function(dataObj) {
		if (dataObj.bard !== 'NULL') {
			if (dataObj.SLA_Level <= 4) {
				sCleric.push(dataObj);
			}
		}
	})
})()

var ClericWand = React.createClass({
	mixins: [Reflux.connect(WandCraftingStore)],

	getInitialState: function() {
		return {
			spellName: '',
			wandsCrafted: '',
			clericSpell: sCleric
		};
	},
	craftWand: function(e) {
		e.preventDefault();
		var wand = {
			spellName: this.state.spellName,
			wandsCrafted: this.state.wandsCrafted,
			casterLevel: this.state.casterLevel
		};
		CraftingActionCreators.wand(wand);
	},
	onSpellNameChanged: function(e) {
		this.setState({spellName: e.target.value});
	},
	onCraftingWand: function(e) {
		this.setState({wandsCrafted: e.target.value});
	},
	onCasterLevelChanged: function(e) {
		this.setState({casterLevel: e.target.value});
	},
	render: function () {
		var casterSpells = [];
		var casterSpell = this.state.clericSpell;

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
				<form onSubmit={this.craftWand}>
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
					<Input label="Number of Wands to Craft" ref='wandsCrafted' type="text" placeholder="Enter number of copies" onChange={this.onCraftingWand}/>
					<ButtonInput type='submit' value='Craft Wand' bsStyle='primary'></ButtonInput>
				</form>
			</div>
		);
	}
});

module.exports = ClericWand;
