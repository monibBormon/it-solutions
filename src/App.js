import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Login from './pages/Authentication/Login/Login';
import Contact from './pages/Contact/Contact';
import Home from './pages/HomePage/Home/Home';
import ServiceDetails from './pages/HomePage/TopServices/ServiceDetails';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service/:title' element={<ServiceDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
