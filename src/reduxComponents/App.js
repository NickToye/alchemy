import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div className="o-grid o-grid--auto2">
    <div
      className="a-alchemy-colour1-bg u-padding"
      style={{
        width: '400px',
      }}
    >
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
    <img src={require('../images/redux-map.png')} className="o-image-block" />
  </div>
);

export default App;
