import React from "react";

const Login = ({
  handleMouseEnter,
  handleMouseLeave,
  imageSrc,
  handleLoginButtonClick,
}) => {
  return (
    <div
      className="pages"
      style={{ height: "100vh", backgroundColor: "black" }}
    >
      <div
        className="text-center"
        style={{ paddingTop: "28vh", marginRight: "5vw" }}
      >
        {/* <img src={logo}></img> */}
      </div>

      <div style={{ paddingTop: "2vh", marginLeft: "37vw" }}>
        <img
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={() => handleMouseLeave()}
          src={imageSrc}
          className="pointer"
          onClick={() => handleLoginButtonClick()}
        ></img>
      </div>
    </div>
  );
};

export default Login;
