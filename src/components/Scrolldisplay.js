'use strict';

var Reflux = require('reflux');
var React = require('react/addons');
var CraftingStore = require('../stores/CraftingStore');

var Panel = require('react-bootstrap').Panel;

require('styles/Scrolldisplay.scss');

var Scrolldisplay = React.createClass({
	mixins: [Reflux.connect(CraftingStore,'spd')],
  render: function() {
  	var spd = this.state.spd;
  	var scrollPrice = 0, days = 0;
  	if (spd !== undefined){
		scrollPrice = spd.scrollPrice;
		days = spd.days;
  	}
    return (
		<Panel>
			<strong>Cost to create scroll(s):</strong> {scrollPrice}gp
			<br></br>
			<strong>Time for scribing scroll:</strong> {days} Days
		</Panel>
    );
  }
});

module.exports = Scrolldisplay;
