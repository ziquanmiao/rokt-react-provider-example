import { Link } from "react-router-dom";
function Cart() {
  return (
    <div className="App">
      <h2>The is the Cart Page</h2>
      <button>
        <Link to="/checkout">checkout</Link>
      </button>
      <div id="rokt"></div>
    </div>
  );
}

export default Cart;
