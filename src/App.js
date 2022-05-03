
import './App.scss';
import {Routes, Route, Navigate} from 'react-router-dom'
import { routeList } from './config/routeList';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Detal from './pages/Detal';
import Catalog from './pages/Catalog';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/bookingFilm' element={<Navigate to={routeList.HOME} />}/>
        <Route path={routeList.HOME} element={<Home />} />
        <Route path={routeList.DETAIL} element={<Detal />} />
        <Route path={routeList.CATEGORY} element={<Catalog />} />
        <Route path={routeList.CATEGORY_SEARCH} element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
