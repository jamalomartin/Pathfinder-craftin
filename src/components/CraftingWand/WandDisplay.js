'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var WandCraftingStore = require('../../stores/WandCraftingStore');

var Panel = require('react-bootstrap').Panel;

var WandDisplay = React.createClass({
	mixins: [Reflux.connect(WandCraftingStore,'wand')],

  render: function() {
  	var wand = this.state.wand;
  	var wandPrice = 0, days = 0;
  	if (wand !== undefined){
		wandPrice = wand.wandPrice;
		days = wand.days;
  	}
    return (
		<Panel>
			Cost to create wand(s): <strong>{wandPrice}</strong>gp
			<br></br>
			Time for crafting wand(s): <strong>{days}</strong>  Days
		</Panel>
    );
  }
});

module.exports = WandDisplay;
