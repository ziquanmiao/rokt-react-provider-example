import React, { useEffect } from "react";
import { useRokt } from "../contexts/RoktContextProvider";

import { Link } from "react-router-dom";

function Confirm() {
  const rokt = useRokt();

  useEffect(() => {
    // Set your attributes with the relevant information
    rokt.setAttributes({ email: "joe.dirt@clean.com" });
    // Indicate to Rokt that you'd like to begin the selection
    rokt.triggerPageChange("http://localhost:3000/confirm");

    // When the page closes, remove all the Rokt placements
    // rokt.getPlacements().then((placements) => {
    //   placements.forEach((placement) => {
    //     console.log(placement);
    //   });
    // });
    return () => {
      rokt.closeAll();
    };
  }, [rokt]);

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
