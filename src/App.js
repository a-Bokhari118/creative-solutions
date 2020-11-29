import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path='/' component={AboutUs} exact />
        <Route path='/work' component={OurWork} exact />
        <Route path='/contact' component={ContactUs} exact />
        <Route path='/work/:id' component={MovieDetail} exact />
      </Switch>
    </div>
  );
}

export default App;
