import { Link } from "react-router-dom";
function Checkout() {
  return (
    <div className="App">
      <h2>The is the Checkout Page</h2>
      <button>
        <Link to="/confirm"> Confirm </Link>
      </button>
    </div>
  );
}

export default Checkout;
