'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var CraftingActionCreators = require('../actions/CraftingActionCreators');

// Json data
var SpellData = require('../components/CraftingScrolls/Spelldata');

var CraftingStore = Reflux.createStore({
  	listenables: [CraftingActionCreators],

  	onCraftscroll: function(obj) {
      var days;
      var spd;
      var spellLevel;

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
          var level = scrollObj.SLA_Level;
          var price;
          var scrollPrice = writingMaterialsCost * level * casterLevel * spellCopies;
          if (scrollPrice === 0) {
            price = 12.5;
          } else {
            price = scrollPrice;
          }
          days = Math.floor(scrollPrice / 1000.0) / 1;
          spd = {scrollPrice: price, days: days, casterLevel: casterLevel, spellLevel: level, spellCopies: spellCopies};
        }
      });
        this.trigger(spd);
  	}
});

module.exports = CraftingStore;
