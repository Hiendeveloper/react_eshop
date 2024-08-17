import React from 'react';
import '../css/style.css';
import '../css/slick.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/nouislider.min.css';
import images from '../img/images.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../AppCss/AppCss.css';

// Định nghĩa kiểu cho hình ảnh
const nbStyle = {
  width: '100px',
  height: 'auto',
  borderRadius: '10px'
};

const Header = () => {
  return (
    <header>
      <div id="top-header">
        <div className="container">
          <div className="pull-left">
            <span>Welcome to E-shop!</span>
          </div>
          <div className="pull-right">
            <ul className="header-top-links">
              <li><a href="#">Store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">FAQ</a></li>
              <li className="dropdown default-dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i className="fa fa-caret-down"></i></a>
                <ul className="custom-menu">
                  <li><a href="#">English (ENG)</a></li>
                  <li><a href="#">Russian (Ru)</a></li>
                  <li><a href="#">French (FR)</a></li>
                  <li><a href="#">Spanish (Es)</a></li>
                </ul>
              </li>
              <li className="dropdown default-dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD <i className="fa fa-caret-down"></i></a>
                <ul className="custom-menu">
                  <li><a href="#">USD ($)</a></li>
                  <li><a href="#">EUR (€)</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="header">
        <div className="container">
          <div className="pull-left">
            <div className="header-logo">
              <a className="logo" href="#">
                {/* Áp dụng nbStyle cho hình ảnh logo */}
                <img src={images.logo} alt="Logo" style={nbStyle} />
              </a>
            </div>
            <div className="header-search">
              <form>
                <input className="input search-input" type="text" placeholder="Enter your keyword" />
                <select className="input search-categories">
                  <option value="0">All Categories</option>
                  <option value="1">Category 01</option>
                  <option value="2">Category 02</option>
                </select>
                <button className="search-btn"><i className="fa fa-search"></i></button>
              </form>
            </div>
          </div>
          <div className="pull-right">
            <ul className="header-btns">
              <li className="header-account dropdown default-dropdown">
                <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                  <div className="header-btns-icon">
                    <i className="fa fa-user-o"></i>
                  </div>
                  <strong className="text-uppercase">My Account <i className="fa fa-caret-down"></i></strong>
                </div>
                <a href="#" className="text-uppercase">Login</a> / <a href="#" className="text-uppercase">Join</a>
                <ul className="custom-menu">
                  <li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
                  <li><a href="#"><i className="fa fa-heart-o"></i> My Wishlist</a></li>
                  <li><a href="#"><i className="fa fa-exchange"></i> Compare</a></li>
                  <li><a href="#"><i className="fa fa-check"></i> Checkout</a></li>
                  <li><a href="#"><i className="fa fa-unlock-alt"></i> Login</a></li>
                  <li><a href="#"><i className="fa fa-user-plus"></i> Create An Account</a></li>
                </ul>
              </li>
              <li className="header-cart dropdown default-dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                  <div className="header-btns-icon">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="qty">3</span>
                  </div>
                  <strong className="text-uppercase">My Cart:</strong>
                  <br />
                  <span>35.20$</span>
                </a>
                <div className="custom-menu">
                  <div id="shopping-cart">
                    <div className="shopping-cart-list">
                      <div className="product product-widget">
                        <div className="product-thumb">
                          {/* Áp dụng nbStyle cho hình ảnh thumbnail */}
                          <img src={images.thumbProduct01} alt="Thumb Product" style={nbStyle} />
                        </div>
                        <div className="product-body">
                          <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                          <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                        </div>
                        <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                      </div>
                      <div className="product product-widget">
                        <div className="product-thumb">
                          {/* Áp dụng nbStyle cho hình ảnh thumbnail */}
                          <img src={images.thumbProduct01} alt="Thumb Product" style={nbStyle} />
                        </div>
                        <div className="product-body">
                          <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                          <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                        </div>
                        <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                      </div>
                    </div>
                    <div className="shopping-cart-btns">
                      <button className="main-btn">View Cart</button>
                      <button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right"></i></button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-toggle">
                <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
