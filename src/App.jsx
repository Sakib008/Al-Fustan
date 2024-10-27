import {Route,Routes} from 'react-router-dom'

import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import {ProductList} from './Pages/ProductList';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-list' element={<ProductList/>} />
      </Routes>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
