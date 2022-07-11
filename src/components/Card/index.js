import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
  
  const onClickButton = () => {
    alert('You added this item!');
  };

    return (
      
<div className={styles.card}>
<img width={133} height={112} src={props.imageUrl} alt="Plus" />
<h5>{props.title}</h5>
<div className="d-flex justify-between align-center">
  <div className="d-flex flex-column">
    <span>Price:</span>
    <b>{props.price} eur.</b>
  </div>
  {/* unliked botton */}
  <button className="unliked">
    <img src="/img/heartwhite.svg" alt="unliked"/>
  </button>
  {/* add button */}
  <button className="button" onClick={props.onClick}>
    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
  </button>
</div>
</div>
    );
}
export default Card;


