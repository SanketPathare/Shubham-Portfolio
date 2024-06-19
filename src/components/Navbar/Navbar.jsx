import { useRef } from "react";
import { FaTimes,FaBars } from "react-icons/fa";
import "./Navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
  const navRef = useRef();
  const showNavbar= ()=>{
     navRef.current.classList.toggle("responsive_nav");
     
  }
  return (
    <>
      <div className="navbar">
        <h3 className="logo">S<b>T</b></h3>
        <ul className="nav-container" ref={navRef} onClick={showNavbar}>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/about"}><li>About</li></Link> 
          <Link to={"/project"}><li>Projects</li></Link> 
          <Link to={"/contact"}><li>Contact</li></Link> 
          <button className="nav-btn nav-close-btn" >
          <FaTimes/>
          </button>
        </ul>
        <button className="nav-btn"onClick={showNavbar}>
        <FaBars/>
        </button>
      </div>
       
    </>
  );
}
export default Navbar;
