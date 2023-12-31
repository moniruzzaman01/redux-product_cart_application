import logo from "../assets/images/logo.png";
import PropTypes from "prop-types";

export default function Navbar({ setShow }) {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>
        <div className="flex gap-4">
          <a
            onClick={() => setShow(true)}
            href="#"
            className="navHome"
            id="lws-home"
          >
            Home
          </a>
          <a
            onClick={() => setShow(false)}
            href="#"
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  setShow: PropTypes.func,
};
