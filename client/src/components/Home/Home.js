import React from "react";
import { Link } from "react-router-dom";

import './Home.css';

const Home = ()=> {
    return (
        <div className="homeOuterContainer">
        
         <div className="chat-icon"></div>
            <h1 className="start-header" >Connect with your friends</h1>
            <Link to={`/join`}>
          <button className="start-button" type="submit">Click to Continue</button>
        </Link>
        
        </div>
    )
};


export default Home;