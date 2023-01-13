import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,  Route, Routes} from 'react-router-dom';
import BugFixer from './components/BugFixer';
import Question from './components/Add-Question/Question';
import ViewQuestion from './components/ViewQuestion'



function App() {
 
  return (
    <div className="App">
      <Router>
        <Header />
       <Routes>

          <Route exact path="/add-question" element={<Question/>} />
          <Route exact path="/question" element={<ViewQuestion/>} />
          <Route exact path="/" element={<BugFixer/>} />
       </Routes>
       
      </Router>
    </div>
  );
}

export default App;
