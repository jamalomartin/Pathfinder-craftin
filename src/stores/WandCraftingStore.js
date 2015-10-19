'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var CraftingActionCreators = require('../actions/CraftingActionCreators');

// Json data
var SpellData = require('../components/CraftingScrolls/Spelldata');


var WandCraftingStore = Reflux.createStore({
  listenables: [CraftingActionCreators],

  onWand: function(obj) {
    console.log(obj);
  	var days;
	var wand;
	var spellLevel;

	var craftingMaterialsCost = 375;

	var casterLevel = obj.casterLevel;
	var wandcraftedCopies = obj.wandsCrafted;
	var spellObj = obj.spellName;
	var spellData = SpellData.getSpellType();

	spellData.forEach(function(wandObj) {
		if (wandcraftedCopies === '') {
			wandcraftedCopies = 1;
		}
		if (spellObj === wandObj.name) {
			var level = wandObj.SLA_Level;
			var price;
			var wandPrice = craftingMaterialsCost * wandObj.SLA_Level * casterLevel * wandcraftedCopies;
			if (wandPrice === 0) {
				price = 375;
			} else {
				price = wandPrice;
			}
			days = Math.floor(wandPrice / 1000.0) / 1;
			wand = {wandPrice: price, days: days, casterLevel: casterLevel, spellLevel: level, wandcraftedCopies: wandcraftedCopies};
		}
	});
	this.trigger(wand);
  }
});

module.exports = WandCraftingStore; 
