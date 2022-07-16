import React from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import "@stripe/stripe-js";
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer'; 
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import Favorites from './pages/Favorites';


function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    axios.get('https://62cd3988066bd2b699213508.mockapi.io/items',).then((res) =>{
      setItems(res.data);
    } );

    axios.get('https://62cd3988066bd2b699213508.mockapi.io/cart',).then((res) =>{
      setCartItems(res.data);
    } );

    axios.get('https://62cd3988066bd2b699213508.mockapi.io/favorites',).then((res) =>{
      setFavorites(res.data);
    } );
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62cd3988066bd2b699213508.mockapi.io/cart', obj);
    setCartItems((prev) => [ ... cartItems, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62cd3988066bd2b699213508.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id == obj.id)) {
        axios.delete(`/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://62cd3988066bd2b699213508.mockapi.io/favorites', obj);
        setFavorites((prev) => [ ...prev, data]);
      }
    } catch (error) {
      alert('Not able to ad to favorites')
    }
  };


const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);

}

  return (

    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}     
      <Header onClickCart = {() => setCartOpened(true)} />

      
      <Switch>
        <Route path="/" exact>        
          <Home items={items} 
          searchValue={searchValue} 
          setSearchValule={setSearchValue} 
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart} />
        </Route>


        <Route path="/favorites" exact>        
          <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
        </Route>

        <Route path="*">        
          <NotFound />
        </Route>

      </Switch>
   

        
    

     <footer className="d-flex justify-around align-center p-20">
       <div>
         <ul className="d-flex">
          <li className="m-5">About Us</li>
          <li className="m-5">Contacts</li>
          <li className="m-5">FAQ</li>
        </ul>
       </div>
    </footer>
    </div>
   )
};



export default App;
