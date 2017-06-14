import React from 'react';
import render from 'react-dom';


export default class todoslist extends React.Component {
        
  render() {
    return (
      <div>
       <table>
           <thead>
               <tr>
                   <th>Task</th>
                   <th>Actions</th>
               </tr>
               </thead>
           </table>
      </div>
    );
  }
}