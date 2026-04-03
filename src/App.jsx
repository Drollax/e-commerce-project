import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from "./pages/HomePage";
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutUsSection from './pages/AboutUs';
import Signup from './pages/Signup';
import Login from './pages/Login';



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
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
      </Switch>
      <Footer/>
      <ToastContainer position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
    </Router>
  );
}

export default App;
