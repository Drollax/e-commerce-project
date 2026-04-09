import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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

import { verifyToken } from './store/actions/clientActions';
import { fetchCategories } from './store/actions/productActions';


function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/:gender/:categoryName/:categoryId">
        <ShopPage />
        </Route>
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId">
          <ProductPage />
        </Route>
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

/* about us kısmındaki en alttaki bölüm yanlış o düzeltilicek resim ve metin */
/* mobil headerdaki shop buttonu dropdownu ayarlanıcak */
/* homepagedeki ProductCardlar yeniden ayarlanacak */