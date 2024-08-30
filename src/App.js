import './App.css';
import Nav from './Component/Nav';
import Cardbody from './Component/Card-body';
import Business from './Component/Category/Business';
import Sports from './Component/Category/Sports';
import Entertainment from './Component/Category/Entertainment';
import Politics  from './Component/Category/Politics';
import Education  from './Component/Category/Education';
import Footer from './Component/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Component/Category/Signin';
import Disaplay from './Component/Category/Disaplay';
import Update from './Component/Category/Update';


function App() {
 
  return (
    <div className="App">

      <>
       

        <BrowserRouter>
         <Nav />
        {/* <Cardbody /> */}
        <Routes>
        <Route path='/' element={<Cardbody/>}/>

        <Route path='/home' element={<Cardbody/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/politics' element={<Politics/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/sports' element={<Sports/>}/>

        <Route path='/signin' element={<Signin/>}/>
        <Route path='/display' element={<Disaplay/>}/>
        <Route path='/update' element={<Update/>}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
