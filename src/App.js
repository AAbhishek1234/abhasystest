import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import DigitalMarketing from './components/DigitalMakreting';
import Ventures from './components/Ventures';
// import Content2 from './components/Content2';
import ContactUs from './pages/ContactUs';
import AllServices from './components/AllServices';

function App() {
  return (
    <>

<Router>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/home' element={<Home/>}/>
  <Route exact path='/allservices' element={<AllServices/>}/>
  <Route exact path='/DigitalMarketing' element={<DigitalMarketing/>}/>
  <Route exact path='/Ventures' element={<Ventures/>}/>
  <Route exact path='/Contact' element={<ContactUs/>}/>
</Routes>
  </Router>

    </>
  );
}
export default App;
