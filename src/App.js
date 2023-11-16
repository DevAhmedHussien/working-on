import './App.css';
import VerticalTabs from './Page';
import Dashboard from './DashBoard';
import Sxema from './Sxema';
import Camera from './Camera';
import NotFound from './NotFound';
import { Routes,Route } from 'react-router-dom';
import NavBar from'./NavBar'
// import Button from '@mui/material/Button'; Link
import { StatesProvider } from './context/ContextStates';
import { TableProvider } from './context/TableContext';
function App() {
  return (
    <StatesProvider>
      <TableProvider>
        <NavBar/>
        <div className="App">
          {/* <div className='header'>
            <div>
              <h2 >Resturnat</h2>
            </div>
            <div className='buttons'>
              <Link to='/'>
              <Button variant="contained">sxema</Button>
                </Link>
                <Link to='/order/owner'>
              <Button variant="contained">owner</Button>
                </Link>
                <Link to='/dashboard'>
              <Button variant="contained">dashboard</Button>
                </Link>
            </div>
          </div> */}
          {/* <VerticalTabs/> */}
          <Routes>
            <Route path="/" element={<Sxema/>} />
            <Route path="/order/:tableId" index element={<VerticalTabs/> }/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TableProvider>
    </StatesProvider>
  );
}
export default App;
