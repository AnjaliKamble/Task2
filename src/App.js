import React from "react";
import { useState } from "react";
import Cards from "./components/getuser.js";
import { FaGithub,  FaFacebook, FaInstagram,  FaLinkedin } from "react-icons/fa";
import "./App.css";
import "./fotter.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1 (api)
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);  
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
        <div class="brand">
          <h1>Let's Grow More </h1>
        </div>
      <section className="wholecontainer">
        {/*creating get users button*/}
        <div class="topnav" id="myTopnav">
         
          <a href="#getusers" class="btn" onClick={handleClick}>Get Users</a>
        </div>
      

        <div className="container">
          <div>
            <img src="users.jpg" className="image" alt=""/>
          </div>
          <div className="row justify-content-center ">
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div class="loader"></div>
              )
            ) : (
              <div className="instruction">
                <p> "Users will be displayed here!!" </p>
              </div>
            )}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
        <footer>
        <div class="footer-content">
          <h3>About Us</h3>
          <p>Connecting made easy!</p>
          <ul class="socials">
            <li><a href="https://www.facebook.com/Anjali.kamble.756/"><FaFacebook/></a></li>
            <li><a href="https://github.com/AnjaliKamble"><FaGithub/></a></li>
            <li><a href="https://www.linkedin.com/in/anjali-kamble-6448b2213/"><FaLinkedin/></a></li>
            <li><a href="https://www.instagram.com/_anj__07/"><FaInstagram/></a></li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>copyright &copy;2021 Let's Grow More. designed and developed by Anjali Kamble <span></span></p>
        </div>
      </footer>
      </section>
    </>
  );
}
export default App;
