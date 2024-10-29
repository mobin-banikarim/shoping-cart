import Header from "./components/Header/Header";
import ContainerProduct from "./components/Product/ContainerProduct";
import CartModal from "./components/modal/CartModal";
import { useSelector } from "react-redux";

function App() {

  let uiSelector = useSelector(state => state.ui.cartIsVisible);
  let cartSelector = useSelector(state => state.cart.items);
  console.log(cartSelector)
  
  return (
    <>
      <Header />
      <ContainerProduct />
      { uiSelector && <CartModal /> }
    </>
  );
}

export default App;