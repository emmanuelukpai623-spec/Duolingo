
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Landingpage from './screen/LandingPage';
import Products from './screen/Produts'

function App() {

  return (
    <>
        <Routes>
        <Route path="/"element={<Landingpage/>} />
        <Route path="/Products"element={<Products/>} />
      </Routes>
    </>
  );
}

export default App
