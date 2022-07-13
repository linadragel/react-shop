import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
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
    // axios.delete(`https://62cd3988066bd2b699213508.mockapi.io/cart${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  // check if there is item in shopping card, if yes, dont add it
  // deletion from shopping cart

const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);

}

  return (

    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart = {() => setCartOpened(true)} />

  <div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1>{searchValue ? `Search results: "${searchValue}"` : 'All Products'} </h1>
      <div className="search-block d-flex align-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Search">
<path d="M15.5 15.5L19 19M5 11C5 11.7879 5.15519 12.5681 5.45672 13.2961C5.75825 14.0241 6.20021 14.6855 6.75736 15.2426C7.31451 15.7998 7.97595 16.2417 8.7039 16.5433C9.43185 16.8448 10.2121 17 11 17C11.7879 17 12.5681 16.8448 13.2961 16.5433C14.0241 16.2417 14.6855 15.7998 15.2426 15.2426C15.7998 14.6855 16.2417 14.0241 16.5433 13.2961C16.8448 12.5681 17 11.7879 17 11C17 9.4087 16.3679 7.88258 15.2426 6.75736C14.1174 5.63214 12.5913 5 11 5C9.4087 5 7.88258 5.63214 6.75736 6.75736C5.63214 7.88258 5 9.4087 5 11V11Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <input onChange={onChangeSearchInput} placeholder="Search..." />
      </div>
    </div>

    <div className="d-flex">
      <div className="d-flex flex-wrap">
        {items.filter( item => item.title.toLowerCase().includes(searchValue)).map ((item, index) => (
          <Card 
          key={index}
          title={item.title} 
          price={item.price} 
          imageUrl={item.imageUrl}
          onFavorite={() => console.log('Added to Favorits')}
          onPlus={(obj) => onAddToCart(obj)}
          />
        ))}
        

      </div>
    </div>
  </div>


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
  );

}



export default App;
