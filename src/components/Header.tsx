import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="max-w-[430px] max-h-full absolute top-0 -z-10">
        <img
          src="/assets/img/background.png"
          alt="background"
          className="w-[100vw] h-[100vh] object-cover"
        />
      </div>
    </>
  );
};

export default Header;
