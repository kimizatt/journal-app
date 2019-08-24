import React from 'react';
import Header from './components/Header'
import './App.css';
import routes from './routes'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      {routes}
    </div>
  );
}

export default App;
