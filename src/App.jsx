import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';

function App() {

  return (
    <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route> </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
