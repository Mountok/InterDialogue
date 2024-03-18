import './App.css'
import {Link, Route, Routes, useLocation} from 'react-router-dom'
import Home from './screens/homePage/Home.jsx'
import About from './screens/aboutPage/About.jsx'
import Service from './screens/servicesPage/Service.jsx';
import MasculinePage from './screens/masculinePages/MasculinePage.jsx';
import Contacts from './screens/contacts/Contacts.jsx';
import { useState } from 'react';
import {useTranslation} from 'react-i18next'
import RuleServices from './screens/ServicesScreens/RuleServices.jsx';
import KonsaltingKadrov from './screens/ServicesScreens/KonsaltingKadrov.jsx';
import { FinanceKonsalting } from './screens/ServicesScreens/FinanceKonsalting.jsx';
import Finansirovanie from './screens/ServicesScreens/Finansirovanie.jsx';
import Ypravlencheskiy from './screens/ServicesScreens/Ypravlencheskiy.jsx';
import Portfeli from './screens/ServicesScreens/Portfeli.jsx';
import PersonalSearch from './screens/ServicesScreens/PersonalSearch.jsx';
import FirmRegist from './screens/ServicesScreens/FirmRegist.jsx';


function App() {
  const location = useLocation();
  const [len,setLen] = useState(true)
  const { t, i18n} = useTranslation()
  const changeLanguage = (boolen) => {
    if (boolen) {
      setLen(!len)
      i18n.changeLanguage("en")
    } else {
      setLen(!len)
      i18n.changeLanguage("ru")
    }
    


  };
  return (
  <>
    <header className='header'>
      <div className="logotype">
        <img src="/svgs/InterDialogueLogo.svg" alt=""/>
      </div>
      <nav className='navbar'>
        <ul>
          <li className={(location.pathname == '/') ? 'active' : ''} ><Link className='link' to='/' >{t("header_home")}</Link></li>
          <li className={(location.pathname == '/about') ? 'active' : ''}><Link className='link' to='/about'>{t("header_about_us")}</Link></li>
          <li className={(location.pathname == '/services') ? 'active' : ''}><Link className='link' to='/services'>{t("header_services")}</Link></li>
          <li className={(location.pathname == '/masculine') ? 'active' : ''}><Link className='link' to='/masculine'>{t("header_opinion")}</Link></li>
          <li className={(location.pathname == '/contacts') ? 'active' : ''}><Link className='link' to='/contacts'>{t("header_contacts")}</Link></li>
          <li className='link' onClick={() => changeLanguage(len)} >{len ? "en" : "ru"}</li>
        </ul>
      </nav>  
    </header>
    

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Service/>}/>
      <Route path='/services/1' element={<RuleServices/>}/>
      <Route path='/services/2' element={<KonsaltingKadrov/>}/>
      <Route path='/services/3' element={<FinanceKonsalting/>}/>
      <Route path='/services/4' element={<Finansirovanie/>}/>
      <Route path='/services/5' element={<Ypravlencheskiy/>}/>
      <Route path='/services/6' element={<Portfeli/>}/>
      <Route path='/services/7' element={<PersonalSearch/>}/>
      <Route path='/services/8' element={<FirmRegist/>}/>
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
