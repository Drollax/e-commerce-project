
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      <Footer/>

    </Router>
  );
}

export default App;
