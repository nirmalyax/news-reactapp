//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter className=''>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Hero />} />
                    {/* <Route path="/" element={<Category />} />
                    <Route path="/" element={<SingleProduct />} /> */}
                </Routes>
        </BrowserRouter>
  );
}

export default App;
