import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route path='/' component={AboutUs} exact />
          <Route path='/work' component={OurWork} exact />
          <Route path='/contact' component={ContactUs} exact />
          <Route path='/work/:id' component={MovieDetail} exact />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
