import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GetApiComponent from './views/GetApiComponent';
import { GetApiProvider } from './ContextApi/Index';


function App() {

  return (
    <GetApiProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GetApiComponent />} />
        </Routes>
      </Router>
    </GetApiProvider>
  )
}

export default App