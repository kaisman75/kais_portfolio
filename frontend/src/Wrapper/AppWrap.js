import React from "react";
import { Social,Navigationdot } from "../components";


const AppWrap = (Component, idName) => function HOC() {
    return (
      <div id={idName} className={`app__container `}>
        <Social />
       
        <div className="app__wrapper app__flex">
          <Component />
  
          <div className="copyright">
            <p className="p-text">@2022 Manai</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
       
        <Navigationdot active={idName} />
      </div>
    );
  };
  
  export default AppWrap;