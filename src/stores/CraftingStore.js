'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var CraftingActionCreators = require('../actions/CraftingActionCreators');

// Json data
var SpellData = require('../components/Spelldata');

var CraftingStore = Reflux.createStore({
  	listenables: [CraftingActionCreators],

  	onCraftscroll: function(obj) {

      var scrollPrice;
      var days;
      var spd;

      var writingMaterialsCost = 12.5;

      var casterLevel = obj.casterLevel;
      var spellCopies = obj.spellCopies;
  		var spellObj = obj.spellName;
  		var spellData = SpellData.getSpellType();

      spellData.forEach(function(scrollObj) {
        if (spellCopies === '') {
          spellCopies = 1;
        }
        if (spellObj === scrollObj.name) {
          scrollPrice = writingMaterialsCost * scrollObj.SLA_Level * casterLevel * spellCopies;
          days = Math.floor(scrollPrice / 1000.0) / 1;
          spd = {scrollPrice: scrollPrice, days: days};
        }
      });
        this.trigger(spd);
  	}
});

module.exports = CraftingStore;
