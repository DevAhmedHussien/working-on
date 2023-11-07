import './App.css';
import VerticalTabs from './Page';
import Dashboard from './DashBoard';
import Sxema from './Sxema';
import NotFound from './NotFound';
import { Routes,Route,Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { StatesProvider } from './context/ContextStates';
import { TableProvider } from './context/TableContext';

function App() {

  return (
    <StatesProvider>
      <TableProvider>
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
        <Route path="/" element={<Sxema/>} />
        <Route path="/order/:tableId" index element={<VerticalTabs/> }/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
      </TableProvider>
    </StatesProvider>
  );
}

export default App;
