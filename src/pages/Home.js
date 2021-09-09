import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <h2>This the landing page</h2>
      <button>
        <Link to="/cart"> Move to Cart page</Link>
      </button>
    </div>
  );
}

export default Home;
