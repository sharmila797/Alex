import { useContext, useState } from "react";
import { AlexioContext } from "../Context";
import TypingAnimation from "./TypingAnimation";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Contact from "./Contact";

const HomeBanner = () => {
  const[state,setstate]=useState({key:0})
  const { nav,changeNav } = useContext(AlexioContext);
  const activePageClass = () => ("home" === nav ? "" : "page--inactive");
  return (
    <div
      className={`page home-banner white-bg ${activePageClass("home")}`}
      id={"home"}
      onClick={() => changeNav("home", false)}
    >
      
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className=" col-xl-5 blue-bg">     {/*home-user-avtar*/}
            <div className="d-flex  v-center-box"
            // home-user-avtar
            //  align-items-end
            >
              <img src="static/img/user1.png" title alt />
            </div>
          </div>
          <div className="col-lg-9 col-xl-7">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">Hello, There</h6>
                    <h1 className="dark-color blue-after">I'm Anand Babu</h1>
                    <p>
                     <TypingAnimation /> 
                    </p>
                    <div className="btn-bar">
                      {/* <button  
                      // href="contact" 
                      className="btn btn-theme"
                      onClick={()=>{

                              {/* <Contact/> */}
                      {/* }}> 
                        Contact me
                      </button> */}
               
                     <a href='/contact' className="btn btn-theme">Contact me</a>
                      
                    </div>
                  </div>
                  {/* <ul className="social-icons">
                    <li>
                      <a className="facebook" href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="twitter" href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="google" href="#">
                        <i className="fab fa-google-plus-g" />
                      </a>
                    </li>{" "}
                    <li>
                      <a className="linkedin" href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
