import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './shared/routes';
import Home from './containers/Home';
import ProductShop from './containers/ProductShop';
import ProductAds from './containers/ProductAds';
import Price from './containers/Price';
import About from './containers/About';
import NavBar from './components/NaviBar';
import Footer from './components/Footer';
import Platform from './containers/Platform';
import MetaHumanPlatform from './containers/MetaHumanPlatform';

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
          <Route path={routes.productShop} element={<ProductShop />} />
          <Route path={routes.productAds} element={<ProductAds />} />
          <Route path={routes.price} element={<Price />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.platform} element={<Platform />} />
          <Route path={routes.metaHumanPlatform} element={<MetaHumanPlatform />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
