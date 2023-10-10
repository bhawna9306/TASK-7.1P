import React from "react";
import Header from "./Header";
import deakin from "./1.png"
import Cardlist from "./CardList";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
const imgstyle = {
    width: "100%",
    height: "600px"
}
const welcomeStyle = {
    fontSize: "36px", // You can adjust the font size as needed
    };
function Home() {
    return (
        <div>
            <div className="nav">
            <Link to='/'><span><h1 style={welcomeStyle}>Home</h1></span></Link>
               
            </div>
            <br></br>
            <Header />
            <br></br>
            <img src={deakin} alt="deakin" style={imgstyle} />
            <br></br>
            <h1>Featured Articles</h1>
            <Cardlist /><br></br>
            <button className="Button">see all articles</button>
            <br></br>
            <h1>Featured Tutorials</h1>
            <Cardlist /><br></br>
            <button className="Button">see all tutorials</button>
            <br></br>
            <br></br>
            <Footer />
          
        </div>
    )
}

export default Home