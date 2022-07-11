function Card() {
    return (
<div className="card">
<img width={133} height={112} src="/img/products/iphone.png" alt="Plus" />
<h5>An apple mobile which is nothing like apple</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Price:</span>
    <b>200 eur.</b>
  </div>
  {/* unliked botton */}
  <button className="unliked">
    <img src="/img/heartwhite.svg" alt="unliked"/>
  </button>
  {/* add button */}
  <button className="button">
    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
  </button>
</div>
</div>
    );
}
export default Card;


