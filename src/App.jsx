
import './App.css'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import IndustrialDetail from './components/IndustrialDetail';
import ResidentialDetail from './components/ResidentialDetail';
import Products from './components/Products';
import Aboutus from './components/Aboutus';
import Blogs from "./components/Blogs";
import PostDetail from "./components/PostDetail";

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
        <Route path={"/aboutus"} element={<Aboutus/>}/>
        <Route path={"/blogs"} element={<Blogs/>}/>
        <Route path={"/posts/:id"} element={<PostDetail/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
