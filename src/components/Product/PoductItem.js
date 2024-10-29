import styles from './PoductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { uiActions } from '../../store/ui-slice';

let PoductItem = (props) => {

    let { id , title , price , img } = props;
    let dispatch = useDispatch();

    let addToCartHandler = () => {
        dispatch(cartActions.addToCart({
            id : id,
            title : title,
            price : price,
            image : img
            
        }));
        dispatch(uiActions.showCart());
    }
    

    return (
        <div className={styles.PoductItem}>
            <img src={img} className={styles.img} alt={title} />
            <h3 className={styles.title}>{ title }</h3>
            <p className={styles.price}>{ price }</p>
            <button className={styles.btn} onClick={addToCartHandler}>Add To Cart</button>
        </div>
    )
}

export default PoductItem;