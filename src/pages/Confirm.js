import { Link } from "react-router-dom";

function Confirm() {
  return (
    <div className="App">
      <h2>The is the Confirmation Page</h2>
      <button>
        <Link to="/">go back</Link>
      </button>
    </div>
  );
}

export default Confirm;
