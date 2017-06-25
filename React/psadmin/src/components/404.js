"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <h1>Page Not Found</h1>
        <h3>Whoops! Sorry... nothing to see here. It appears the evil wizard has
        banished you to this realm, he must be stopped!</h3>
        <p>(Just Kidding, this is a 404 page... or is it?)</p>
        <Link className="btn btn-success" to="app">Back to Safety</Link>
      </div>
    );
  }
});

module.exports = NotFoundPage;
