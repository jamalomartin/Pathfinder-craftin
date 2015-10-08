/*eslint strict: [2, "global"]*/

var Crafting2App = require('./Crafting2App');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={Crafting2App}>
    <Route name="/" handler={Crafting2App}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
