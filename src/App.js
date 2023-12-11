import './App.css';
import Navigation from './Components/Layout/Navigation';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Pagenotfounnd from './Components/Pages/Pagenotfounnd';



function App() {
  return (
      <div>
        <BrowserRouter>
        <Navigation/>

        <Routes>

        <Route path='/home' element={<Home/>}></Route>  
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='*' element={<Pagenotfounnd/>} />

        </Routes>

        </BrowserRouter>
      </div>
  );
}

export default App;
