import './App.css';
import Header from './components/header/header.js';
import Contact from './components/contact/contact';
import Sidebar from './components/sidebar/sidebar';
import MainPage from './pages/main/mainPage';
import MorePage from './pages/more/morePage';
import NotFoundPage from './pages/not-found/notFoundPage';
import { Routes, Route } from 'react-router-dom'
import SellCardMonitor from './pages/sell-cards/sell-card__monitor/sell-card__monitor';

const App = () => {
  return ( 
  <div className = "main-inner" >
    <div className = "content-inner">
      <Header />
        <Routes>
          <Route path = "/" element = {<MainPage />} />
          <Route path = "/more" element = {<MorePage />} />
          <Route path = "/zapchasti" element = {<SellCardMonitor />} />
          <Route path = "*" element = {<NotFoundPage />} />
        </Routes>
      <Contact />
    </div>
    <Sidebar />
  </div>
  );
}

export default App;  