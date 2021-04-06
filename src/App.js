import React from 'react';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  const name = "Matt";
  const dropdown = {title: "List of options", options: ['Option 1', 'Option 2', 'Option 3']};
  return (
    <div className="App">
      <Header name={name}/>
      <Dropdown title={dropdown.title} options={dropdown.options} />
    </div>
  );
}

export default App;
