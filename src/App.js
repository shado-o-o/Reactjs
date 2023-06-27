import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import SginUp from './components/Loggin/SginUp';
import SginIn from './components/Loggin/SginIn';
import End from './components/footer/End';
import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import './sass/main.css';

function App()  {
    
         return (
            <Router>
                 <div className='App'>
                <Header />
                <div>
                    <Routes>
                        <Route path='/' exact element={<Body/>}/>
                        <Route path='/sginup' element={<SginUp/>}/>
                        <Route path='/sginin' element={<SginIn/>}/>
                    </Routes>
                   
                </div>
                <End/>
              </div>
            </Router>
           
            
         )
    
}
export default App;