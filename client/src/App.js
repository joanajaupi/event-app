import './App.css';
import {Home} from './components/home'
import {EventPage} from './components/layouts/eventPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/event" element={<EventPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
