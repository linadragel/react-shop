import {loadStripe} from '@stripe/stripe-js';
import { Link } from "react-router-dom";

function Drawer({ onClose, onRemove, items = [] }) {

// let stripePromise;

//   const getStripe = () => {
//     if (!stripePromise) {
//       stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
//     }
//     return stripePromise;
//   };

  
// const Checkout = () => {
// const item = {
//   price: "price_1LM6EwITlLY8eCqveOBri1VX",
//   quantity: 1
// };

// const checkoutOptions = {
//   lineItems: [item],
//   mode: "payment",
//   successUrl: `${window.location.origin}/success`,
//   cancelUrl: `${window.location.origin}/cancel`
// }

// const redirectToCheckout = async () => {
//   console.log("redirectToCheckout")

//   const stripe = await getStripe ()
//   const {error} = await stripe.redirectToCheckout(checkoutOptions)
//   console.log("Stripe checkout error", error)
// }

    return (
        <div  className="overlay">
        <div className="shopping-drawer">
          <h2 className="display-flex justify-between mb-30">Shopping Cart <img onClick={onClose} className="cu-p" src="/img/back.svg"/></h2>

        {
          items.length > 0 ? (
            <div>
              <div className="items">
          {items.map((obj) => (
            <div className="cart-item d-flex align-center mb-10">
            <div
              style={{ backgroundImage: `url(${obj.imageUrl})` }}
              className="cart-item-img"></div>

            <div className="mr-20 flex">
              <p className="mb-5">{obj.title}</p>
              <b>{obj.price}</b>
            </div>
              <img onClick={() => onRemove(obj.id)} className="remove-btn" src="/img/closebtn.svg" alt="remove"/>
            </div>
          ))}
      </div> 
              <div className="cart-total-block">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>1200 eur.</b>
                </li>
                <li>
                  <span>Tax.:</span>
                  <div></div>
                  <b>15 eur.</b>
                </li>
              </ul>
              <a href="https://buy.stripe.com/test_28o7vbdkhbeYgNi4gg">
              <button className="blue-button">Place an order</button>
              </a>
            </div>
            </div>
      ) : (
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.svg" alt="empty cart"/>
            <h2>Empty Cart</h2>
            <p class="opacity-6">Add something to your cart</p>

            <button onClick={onClose} className="blue-button">
              <img src="/img/back.svg" alt= "back" />Go Back
            </button>

          </div>
      )}

      </div>
      </div>
    )
}
export default Drawer;