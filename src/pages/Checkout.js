import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useRokt } from "../contexts/RoktContextProvider";
function Checkout() {
  const placeholderRef = useRef(null);
  const rokt = useRokt();

  useEffect(() => {
    if (!placeholderRef.current) {
      return;
    }
    rokt.setAttributes({
      email: "user@example.com",
    });
    rokt.triggerPageChange("checkout.page");

    return () => {
      rokt.closeAll();
    };
  }, [placeholderRef.current, rokt]);

  return (
    <div className="App">
      <h2>The is the Checkout Page</h2>
      <div id="rokt" ref={placeholderRef}></div>
      <button>
        <Link to="/confirm"> Confirm </Link>
      </button>
    </div>
  );
}

export default Checkout;
