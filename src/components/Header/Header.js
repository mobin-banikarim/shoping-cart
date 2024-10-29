import styles from './Header.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch , useSelector } from 'react-redux';

let Header = () => {

    let dispatch = useDispatch();

    let showCart = () => {
        dispatch(uiActions.toggle());
    }

    return (
        <div className={styles.header_container}>
            <div className={styles.container}>
                <h1 className={styles.title}>Shoping Cart</h1>
                <button
                    className={styles.cart_btn}
                    onClick={showCart}
                >
                    Cart
                </button>
            </div>
        </div>
    )
}

export default Header;