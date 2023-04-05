import React from "react";
import loader from "../asstes/loading.svg";
const Loader = () => {
  return (
    <div>
      <img
        style={{
          width: "50%",
          marginTop: "100px",
        }}
        src={loader}
        alt="loading"
      />
    </div>
  );
};

export default Loader;
