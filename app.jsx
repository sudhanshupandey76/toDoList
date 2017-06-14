import React from 'react';
import render from 'react-dom';

import todoslist from './todos';

const todos = [
  {
    task: "make Raect App",
    isCompleted: false
  },
  {
    task: "Get Job",
    isCompleted: true
  }
];

export default class App extends React.Component {
  render() {
    return (     
      <div>   
        <h1>React To Do's App</h1>
        <todoslist/>
        <h2>nascasjdkajkdm</h2>
      </div>
    );
  }
}