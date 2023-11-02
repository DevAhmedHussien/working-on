import './App.css';
import VerticalTabs from './Page';
import Dashboard from './DashBoard';
import Sxema from './Sxema';
import NotFound from './NotFound';
import { Routes,Route,Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
    const [dayOrder,setDorder] = useState([])
    const [productsOfOrder , setProductsOfOrder] = useState([])
  
  return (
    <div className="App">
      <div className='header'>
        <div>
          <h2 >Resturnat</h2>
        </div>
        <div className='buttons'>
          <Link to='/'>
          <Button variant="contained">sxema</Button>
            </Link>
            <Link to='/order/1'>
          <Button variant="contained">order</Button>
            </Link>
            <Link to='/dashboard'>
          <Button variant="contained">dashboard</Button>
            </Link>
        </div>
        </div>
      {/* <VerticalTabs/> */}
      <Routes>
        <Route path="/" element={<Sxema />} />
        <Route path="/order/:tableId" index element={<VerticalTabs productsOfOrder={productsOfOrder}
        setProductsOfOrder={setProductsOfOrder} dayOrder={dayOrder} setDorder={setDorder} />} />
        <Route path="/dashboard" element={<Dashboard productsOfOrder={productsOfOrder}
        setProductsOfOrder={setProductsOfOrder} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
