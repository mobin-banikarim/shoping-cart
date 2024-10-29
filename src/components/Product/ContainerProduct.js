import styles from './ContainerProduct.module.css';
import PoductItem from './PoductItem';

let ContainerProduct = () => {
    return (
        <div className={styles.container_product}>
            <PoductItem
                id='1'
                title='one product'
                price={12.99}
                img='https://www.irantimer.com/Images/Products/Big/9e05bd8058e84ccb8e910a27258d3691.jpg'
            />
            <PoductItem
                id='2'
                title='two product'
                price={12.99}
                img='https://www.irantimer.com/Images/Products/Big/0f46afc60b9546db97a9732924f957a4.jpg'
            />
            <PoductItem
                id='3'
                title='three product'
                price={12.99}
                img='https://www.irantimer.com/Images/Products/Big/e702735eeb744c47813ab84294aed642.jpg'
            />
        </div>
    )
}

export default ContainerProduct;