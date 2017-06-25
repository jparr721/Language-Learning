import React, { Component } from 'react';
import Projects from './components/Projects';
import uuid from 'uuid';
import AddProject from './components/AddProject';
import todos from './components/todos'
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      projects: [],
      todos:[]
    }
  }



  getTodos(){
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
      url: root + '/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Card',
        category: 'Web Development'
      },
    ]});
  }

componentWillMount(){
  this.getProjects();
  this.getTodos();
}

componentDidMount() {
  this.getTodos();
}

handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}

handleDeleteProject(id){
  let projects = this.state.projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index, 1);
  this.setState({projects:projects});
}

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr/>
        <todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;