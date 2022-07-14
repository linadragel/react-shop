import React from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer'; 
import NotFound from "./pages/NotFound";
import Home from './pages/Home';


function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  // React.useEffect(() => {
  //   fetch('https://62cd3988066bd2b699213508.mockapi.io/items').then(res => {
  //     return res.json();
  //   })
  //   .then((json) => {
  //     setItems(json);
  //   });
  React.useEffect(() => {
    axios.get('https://62cd3988066bd2b699213508.mockapi.io/items',).then((res) =>{
      setItems(res.data);
    } );

    axios.get('https://62cd3988066bd2b699213508.mockapi.io/cart',).then((res) =>{
      setCartItems(res.data);
    } );
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://62cd3988066bd2b699213508.mockapi.io/cart', obj);
    setCartItems((prev) => [ ... cartItems, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62cd3988066bd2b699213508.mockapi.io/cart${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://62cd3988066bd2b699213508.mockapi.io/favorites', obj);
    setFavorites((prev) => [ ... cartItems, obj]);
  };

  // add: check if there is item in shopping card, if yes, dont add it
  // deletion from shopping cart

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
        <Route path="/notfound" exact>        
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
