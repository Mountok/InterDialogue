import './App.css'
import {Link, Route, Routes, useLocation} from 'react-router-dom'
import Home from './screens/homePage/Home.jsx'
import About from './screens/aboutPage/About.jsx'
import Service from './screens/servicesPage/Service.jsx';
import MasculinePage from './screens/masculinePages/MasculinePage.jsx';
import Contacts from './screens/contacts/Contacts.jsx';
import { useState } from 'react';


function App() {
  const location = useLocation();
  const [len,setLen] = useState(true)
  return (
  <>
    <header className='header'>
      <div className="logotype">
        <img src="/svgs/InterDialogueLogo.svg" alt=""/>
      </div>
      <nav className='navbar'>
        <ul>
          <li className={(location.pathname == '/') ? 'active' : ''} ><Link className='link' to='/' >Главная</Link></li>
          <li className={(location.pathname == '/about') ? 'active' : ''}><Link className='link' to='/about'>О Нас</Link></li>
          <li className={(location.pathname == '/services') ? 'active' : ''}><Link className='link' to='/services'>Услуги</Link></li>
          <li className={(location.pathname == '/masculine') ? 'active' : ''}><Link className='link' to='/masculine'>Отзывы</Link></li>
          <li className={(location.pathname == '/contacts') ? 'active' : ''}><Link className='link' to='/contacts'>Контакты</Link></li>
          <li><Link onClick={() => setLen(!len)}  className='link'>{len ? "RU" : "ENG"}</Link></li>
        </ul>
      </nav>  
    </header>
    

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Service/>}/>
      <Route path='/masculine' element={<MasculinePage/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
    </Routes> 

    <footer className='footer'>
      <div className="company">
        <p>© 2004 - 2023</p>
        <p>InterDialogue Business</p>
        <p className='small_text'>Использование материалов сайта 
          разрешается только после получения 
          письменного разрешения.</p>
      </div>
      <div className="address">
        <a>
        Австрия, г. Вена, ул.Нойвалдеггерштрассе, 19-21/4/5
        </a>
        <p className='small_text' >Email</p>
        <a>office@interdialogbusiness.com</a>
        <p className='small_text' >Телефон:</p>
        <a>(+43) 664 568 01 55</a>
      </div>

      <div className="rooms">
        <p className='small_text'>Навигация </p>
        <a href="">Главная</a>
        <a href="">О компании</a>
        <a href="">Услуги</a>
        <a href="">Отзывы</a>
        <a href="">Контакты</a>
      </div>
    </footer>
  </>
  )
}

export default App
