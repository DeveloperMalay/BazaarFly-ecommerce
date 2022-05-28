import React, { useState } from "react";
import "./Navbar.scss";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { BsCart2, BsSearch, BsArrowRepeat } from "react-icons/bs";
import { images } from "../../constants/index";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav>
        <div className="navigation_top_bar">
          <ul>
            <li className="inactive">
              <a href="/">Feedback</a>
            </li>
            <li>
              <a href="/">My Dukan</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div className="navigation_bar">
          <span className="icon-menu" onClick={handleShow}>
            <AiOutlineMenu />
          </span>

          <span className="logo">
            <img src={images.logo} alt="" />
          </span>
          <div className="navigation_searchinput">
            <input
              type="search"
              name="search"
              placeholder="Search 10,000 + products.."
            />
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">Cosmetics and Peersonal Care</option>
              <option value="">Medicines</option>
              <option value="">Gift & Toy </option>
              <option value="">Jewellery</option>
              <option value="">Bag Purse and Belt</option>
              <option value="">laptop and Computer Accessories</option>
              <option value="">Watch and Clock</option>
              <option value="">Daily Needs</option>
              <option value="">Home Care and Decoration</option>
              <option value="">Cloth and Fasion Wear</option>
              <option value="">robotics and 3d Printing</option>
              <option value="">Electronics</option>
              <option value="">Book and Study Materials</option>
              <option value="">Shoe and Sock</option>
              <option value="">Pooja Samogree</option>
              <option value="">Smart Phone and Mobile</option>
            </select>
          </div>
          <span className="icon-search">
            <BsSearch />
          </span>
          <span className="icon-compare">
            <span>
              <BsArrowRepeat />
            </span>
            <div className="icon_section2">
              <div>0</div>
              <p>Compare</p>
            </div>
          </span>

          <span className="icon-heart">
            <span>
              <AiOutlineHeart />
            </span>
            <div className="icon_section2">
              <div>0</div>
              <p>Favorite</p>
            </div>
          </span>

          <span className="icon-cart">
            <span>
              <BsCart2 />
            </span>
            <div className="icon_section2">
              <div>0</div>
              <p>Cart</p>
            </div>
          </span>
        </div>
        <div className="navigation_bottom_bar">
          {[
            "Lakme",
            "Umbrella",
            "Watch",
            "wrist watch",
            "blouse",
            "zZng",
            "saree",
            "toy",
            "Mobiles",
            "body spray",
          ].map((item) => (
            <li key={item} className="navigation_bottom_bar_items">
              <div className="list_items">
                <a href="/">{item}</a>
              </div>
              <span>|</span>
            </li>
          ))}
        </div>

        <div className="offcanvas_btn">
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sign In | Sign Up</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>Home</Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
