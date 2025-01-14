import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import "@blueprintjs/core/lib/css/blueprint.css";
import Todo from './TODO-LIST/Todo';
import News from './NEWS APP/News';
// import Bmi from './BMIAPP/Bmi';
// import PasswordGeneratot from './PasswordGenerator/PasswordGeneratot';
// import Faq from './FAQProjects/Faq';
// import TempratureConversion from './TempratureConversion/TempratureConversion';
// import Register from './LoginPage/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
{/* <BrowserRouter>
<ul>
  <li><Link to='/home'>Click Here</Link></li>
  <li><Link to='/login'>Login</Link></li>
</ul>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/> 
  <Route path='/login' element={<Login/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
</Routes>
</BrowserRouter> */}
{/* <Bmi/> */}
{/* <PasswordGeneratot/>

*/}
{/* <Faq/> */}

{/* <TempratureConversion/>
 */}
 {/* <Register/> */}
 {/* <Todo/> */}
 <News/>







  </React.StrictMode>
);
reportWebVitals();
