import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='home' element={<Home/>} />
          <Route path='projects' element={<Home/>} />
          <Route path='skils' element={<Home/>} />
          <Route path='blogs' element={<Home/>} />
          <Route path='about' element={<Home/>} />
          <Route path='contact' element={<Home/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
