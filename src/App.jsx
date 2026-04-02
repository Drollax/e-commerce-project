
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsSection from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product" component={ProductPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/team" component={TeamPage}/>
        <Route path="/about" component={AboutUsSection}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
