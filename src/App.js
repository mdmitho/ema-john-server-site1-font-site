
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import RequierAuth from './components/RequierAuth/RequierAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SingUP from './components/SingUp/SingUP';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
        <RequierAuth>
          <Inventory></Inventory>
        </RequierAuth>
      }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SingUP></SingUP>}></Route>
        <Route path='/shipment' element={
          <RequierAuth>
            <Shipment></Shipment>
          </RequierAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
