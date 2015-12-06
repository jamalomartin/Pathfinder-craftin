'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var CraftingActionCreators = require('../actions/CraftingActionCreators');
var ScrollModal = require('../modals/ScrollModal');

// Json data
var SpellData = require('../components/CraftingScrolls/Spelldata');

var CraftingStore = Reflux.createStore({
  	listenables: [CraftingActionCreators],

  	onCraftscroll: function(obj) {
      var days;
      var spd;
      var spellLevel;
      var casterSpellLevel;
      var caster = obj.caster;
      var casterLevel = obj.casterLevel;
      var spellCopies = obj.spellCopies;
      var spellObj = obj.spellName;
      var spellData = SpellData.getSpellType();
      var currentCasterLevel;

      var writingMaterialsCost = 12.5;

      function validSpellCraft (casterSpellLevel, casterLevel) {
        if ((casterLevel - 2) >= casterSpellLevel) {
          currentCasterLevel = casterLevel;
          console.log("Yes");
        } else {
          ScrollModal();
          console.log("your caster level is to low to craft this scroll");
        }
      }


      spellData.forEach(function(scrollObj) {
        if (spellCopies === '') {
          spellCopies = 1;
        }
        if (spellObj === scrollObj.name) {
          if (caster === 'wiz') {
            casterSpellLevel = scrollObj.wiz;
            validSpellCraft(casterSpellLevel, casterLevel);
          } else if (caster === 'paladin') {
            casterSpellLevel = scrollObj.paladin;
            validSpellCraft(casterSpellLevel, casterLevel);
          } else if (caster === 'sor') {
            casterSpellLevel = scrollObj.sor;
            validSpellCraft(casterSpellLevel, casterLevel);
          } else if (caster === 'ranger') {
            casterSpellLevel = scrollObj.ranger;
            validSpellCraft(casterSpellLevel, casterLevel);
          } else if (caster === 'bard') {
            casterSpellLevel = scrollObj.bard;
            validSpellCraft(casterSpellLevel, casterLevel);
          } else if (caster === 'cleric') {
            casterSpellLevel = scrollObj.cleric;
            validSpellCraft(casterSpellLevel, casterLevel);
          } else {
            casterSpellLevel = scrollObj.druid;
            validSpellCraft(casterSpellLevel, casterLevel);
          };

          var scrollPrice = writingMaterialsCost * casterSpellLevel * currentCasterLevel * spellCopies;
          if (scrollPrice === 0) {
            var price = 12.5;
          } else {
            price = scrollPrice;
          }
          days = Math.floor(scrollPrice / 1000.0) / 1;
          spd = {scrollPrice: price, days: days, casterLevel: casterLevel, spellLevel: casterSpellLevel, spellCopies: spellCopies};
        }
      });
        this.trigger(spd);
  	}
});

module.exports = CraftingStore;
