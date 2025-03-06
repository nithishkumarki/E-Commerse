import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx'; 
import Shopping from './Pages/Shopping.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import  LoginSignUp  from './Pages/LoginSignUp.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shopping/>} />
          <Route path='/mens' element={<ShopCategory category='men' />} />
          <Route path='/womens' element={<ShopCategory category='women' />} />
          <Route path='/kids' element={<ShopCategory category='kid' />} />
          <Route path='/product' element={<Product />} >
               <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp/>}/>

        </Routes>
      </BrowserRouter>

          
    </div>
  );
}

export default App;
