import React from "react";
import "./Banner.scss";
import { AiOutlineRight } from "react-icons/ai";
import { images } from "../../constants/index";
import Carousel from "react-bootstrap/Carousel";

const categories = [
  {
    img: "https://bazaarfly.com/public/uploads/categories/banner/inUigmYw4yChdOTEgTWytRvelCMlayunSGrmu553.png",
    name: "Smart Phone and Mobile Accessories",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/icon/4diMCDu4wViWJPSr5sYPv6frT0CeS4qLD5vUVYBk.png",
    name: "Laptop and Computer Accessories",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/icon/ksCVw1EXdU2gJWBc1mXhHNHTrlyGW5V1L0qmoupa.png",
    name: "Daily Needs",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/icon/scIzNFhRfeUgTwYTEJEv4yxSTSG3WM2weOge0MQN.png",
    name: "Home Care and Decoration",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/banner/HaalrulpDlgYVdKBoBjSfxCJ66s5HO5e3mZQMnJp.png",
    name: "Cloth and Fashion Wear ",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/banner/wnWrWuUtpxDZNI0H9GopFmQYplAz2qCY4UiE0WKI.png",
    name: "Jewellery",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/banner/FUrJqQncSY32lX6kaxnupOKiIPRUnxwsCHabppWU.png",
    name: "Cosmetics and Personal Care",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/icon/4Au9xLynWEz0SPcjjBenDxfT8QGcRh32IV5cR6Nu.png",
    name: "Shoe and Sock",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/icon/OHIauwMHUNwZahY3dMHBcfshMrm58Sqm7DwkG53C.png",
    name: "Book and Study Material",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/icon/bniCnIpqKhQ4FzP0RiQLEPLErkZljfWvjNGl8e73.png",
    name: "Electronics",
  },
  {
    img: "https://bazaarfly.com/public/uploads/categories/icon/Kr7LtZ5PtRzgBRgOm3AKCMDaT2RX3FAM48KtGkwg.png",
    name: "Medicines",
  },
];

const Banner = () => {
  return (
    <>
      <div className="banner_container">
        <div className="category">
          <div className="category_header">
            <p>Category</p>
            <span>
              See All
              <span>
                <AiOutlineRight />
              </span>
            </span>
          </div>
          {categories.map((item) => (
            <li key={item} className="category_items">
              <img src={item.img} alt="" />
              <span href="/">{item.name}</span>
            </li>
          ))}
          {categories.map((item) => (
            <li key={item} className="category_card">
              <img src={item.img} alt="" />
              <span href="/">{item.name}</span>
            </li>
          ))}

        </div>
        <div className="banner_section">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={images.bnr1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={images.bnr2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={images.bnr3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="banner_section_bottom">
            <img
              src="https://bazaarfly.com/public/uploads/categories/banner/FUrJqQncSY32lX6kaxnupOKiIPRUnxwsCHabppWU.png"
              alt=""
            />
            <img
              src="https://bazaarfly.com/public/uploads/categories/banner/pR8BWEXupOTQ6L3bJyXOsACZAS1Fe6bXzjD5zZbi.png"
              alt=""
            />
            <img
              src="https://bazaarfly.com/public/uploads/categories/banner/wnWrWuUtpxDZNI0H9GopFmQYplAz2qCY4UiE0WKI.png"
              alt=""
            />
            <img
              src="https://bazaarfly.com/public/uploads/categories/banner/Dtlz14vd8p2pyMFO4VVjtYSEwdZzuFn3QiLQcFSF.png"
              alt=""
            />
            <img
              src="https://bazaarfly.com/public/uploads/categories/banner/ZinRY3rdkzox5u9xCKOG6IgQDvL8NctOaijYDg9t.png"
              alt=""
            />
            <img
              src="https://bazaarfly.com/public/uploads/categories/banner/HaalrulpDlgYVdKBoBjSfxCJ66s5HO5e3mZQMnJp.png"
              alt=""
            />
            <img
              src="https://bazaarfly.com/public/uploads/categories/banner/inUigmYw4yChdOTEgTWytRvelCMlayunSGrmu553.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
