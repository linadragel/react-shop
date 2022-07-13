function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div  className="overlay">
        <div className="shopping-drawer">
          <h2 className="display-flex justify-between mb-30">Shopping Cart <img onClick={onClose} className="cu-p" src="/img/back.svg"/></h2>
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
          <button className="blue-button">Place an order</button>
        </div>
      </div>
      </div>
    )
}
export default Drawer;