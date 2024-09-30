
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCharacters from './Pages/AllCharacters';
import Character from './Pages/Character';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllCharacters/>}/>
        <Route path="/character/:id" element={<Character/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
