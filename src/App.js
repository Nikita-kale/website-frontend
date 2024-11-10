import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Product from './Pages/Product';
import Payment from './Pages/Payment';
import Gallary from './Pages/Gallary';
import Feedback from './Pages/Feedback';
import Enquiry from './Pages/Enquiry';
import MailPage from './Pages/MailPage';
import Address from './Pages/Address';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/mail" element={<MailPage/>} />
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/gallary' element={<Gallary/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/enquiry' element={<Enquiry/>}/>
      <Route path='/address' element={<Address/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
