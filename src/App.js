
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
