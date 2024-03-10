import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register'; // eslint-disable-next-line 
import Stores from './Stores';
import Productlist from './ProductList';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = "/" element ={<Stores/>}/>
        <Route index path = "register" element = { <Register/>}/>
        <Route path="login" element = { <Login/>}/>
        <Route path="productlist" element ={<Productlist/>}/>
      </Routes>
    </BrowserRouter>
      {/* <h1 className='message'>Good morning World</h1>
      <Login/>
      <Register/>
      <Stores/>
      <Productlist/> */}
    </>
    
  );
}

export default App;
