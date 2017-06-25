import React, { Component } from 'react';
import todoItem from './todoItem';

class todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log(project);
        return (
          <todoItem key={todo.title} todo={todo} />
        )
      });
    }

    return (
      <div className="todos">
      <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

export default todos;
