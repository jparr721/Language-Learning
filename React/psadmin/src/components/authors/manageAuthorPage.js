"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/AuthorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      author: { id: '', firstName: '', lastName: '' },
      errors: {}
    };
  },

  //Calls on every key press
  setAuthorState: function(event) {
    //Get the field we want to edit
    var field = event.target.name;
    //Retreive the value from the field
    var value = event.target.value;
    //Set the given field to store the value given
    this.state.author[field] = value;
    //Update the state of the property
    return this.setState({author: this.state.author});
  },

  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; //Clear previous errors

    if(this.state.author.firstName.length < 3){
      this.state.errors.firstName = 'First name must be at least 3 characters';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3){
      this.state.errors.lastName = 'Last name must be at least 3 characters';
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});
    return formIsValid;
  },

  saveAuthor: function(event) {
    event.preventDefault();
    if(!this.authorFormIsValid()){
      return;
    }
    AuthorApi.saveAuthor(this.state.author);
    toastr.success('Author saved.');
    this.transitionTo('authors');
  },

  render: function() {
    return (
      //onChange is a on Change handler and gets called on state change
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors}/>
    );
  }
});

module.exports = ManageAuthorPage;
