function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="shopping-drawer">
          <h2 className="display-flex justify-between mb-30">Shopping Cart <img width={24} height={24} src="/img/back.svg"/></h2>
          <div className="items">
      <div className="cart-item d-flex align-center mb-10">
        <div style={{backgroundImage:'url(/img/products/iphone.png)'}} className="cart-item-img"></div>
        <div className="mr-20 flex">
          <p className="mb-5">An apple mobile which is nothing like apple</p>
          <b>1000 eur.</b>
        </div>
        <img className="remove-btn" src="/img/closebtn.svg" alt="remove"/>
        </div>
  
        <div className="cart-item d-flex align-center">
              <div style={{backgroundImage:'url(/img/products/iphone.png)'}} className="cart-item-img"></div>
          <div className="mr-20 flex">
            <p className="mb-5">An apple mobile which is nothing like apple</p>
            <b>1000 eur.</b>
          </div>
        <img className="remove-btn" src="/img/closebtn.svg" alt="remove"/>
        </div>
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
          <button className="blue-button">Place an order</button>
        </div>
      </div>
      </div>
    )
}
export default Drawer;