import React from 'react';
import "./assets/scss/style.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import landing_page from './pages/landing_page';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={landing_page}></Route>
      </Router>
    </div>
  );

}

export default App;
