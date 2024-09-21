
import './App.css'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import IndustrialDetail from './components/IndustrialDetail';
import ResidentialDetail from './components/ResidentialDetail';
import Products from './components/Products';

function App() {
 
  return (
    <div className='main'>
      <Router>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Landing/>}/>
        <Route path={"/industrial/:id"} element={<IndustrialDetail/>}/>
        <Route path={"/residential/:id"} element={<ResidentialDetail/>}/>
        <Route path={"/products"} element={<Products/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
