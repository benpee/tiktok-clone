import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './before/pages/Home';
import Upload from './before/pages/Upload';
import Header from './components/Header';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path='/upload' component={Upload} />
        <Route exact path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

