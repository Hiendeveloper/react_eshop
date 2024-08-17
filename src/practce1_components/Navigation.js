import React, { Component } from 'react';
import '../css/style.css';
import '../css/slick.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/nouislider.min.css';
import images from '../img/images.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../AppCss/AppCss.css';

const nbStyle = {
  width: '100px',
  height: 'auto',
  borderRadius: '10px'
};

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    {/* container */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="header-logo">
                                    <a href="index.html">
                                        <img src={images.logo} alt="Logo" style={nbStyle} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                {/* category nav */}
                                <div className="category-nav">
                                    <span className="category-header">
                                        Categories <i className="fa fa-bars" />
                                    </span>
                                    <ul className="category-list">
                                        <li>
                                            <a href="#">Women’s Clothing</a>
                                        </li>
                                        <li>
                                            <a href="#">Men’s Clothing</a>
                                        </li>
                                        <li>
                                            <a href="#">Phones &amp; Accessories</a>
                                        </li>
                                        <li>
                                            <a href="#">Jewelry &amp; Watches</a>
                                        </li>
                                        <li>
                                            <a href="#">Bags &amp; Shoes</a>
                                        </li>
                                        <li>
                                            <a href="#">View All</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /category nav */}
                                {/* menu nav */}
                                <div className="menu-nav">
                                    <span className="menu-header">
                                        Menu <i className="fa fa-bars" />
                                    </span>
                                    <ul className="menu-list">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Shop</a>
                                        </li>
                                        <li className="dropdown mega-dropdown">
                                            <a
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-expanded="true"
                                            >
                                                Women <i className="fa fa-caret-down" />
                                            </a>
                                            <div className="custom-menu">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">Categories</h3>
                                                            </li>
                                                            <li>
                                                                <a href="#">Women’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Men’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Phones &amp; Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jewelry &amp; Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bags &amp; Shoes</a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">Categories</h3>
                                                            </li>
                                                            <li>
                                                                <a href="#">Women’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Men’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Phones &amp; Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jewelry &amp; Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bags &amp; Shoes</a>
                                                            </li>
                                                        </ul>
                                                        <hr className="hidden-md hidden-lg" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">Categories</h3>
                                                            </li>
                                                            <li>
                                                                <a href="#">Women’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Men’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Phones &amp; Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jewelry &amp; Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bags &amp; Shoes</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row hidden-sm hidden-xs">
                                                    <div className="col-md-12">
                                                        <hr />
                                                        <a className="banner banner-1" href="#">
                                                            <img src={images.banner05} alt="New Collection" style={nbStyle} />
                                                            <div className="banner-caption text-center">
                                                                <h2 className="white-color">NEW COLLECTION</h2>
                                                                <h3 className="white-color font-weak">HOT DEAL</h3>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown mega-dropdown full-width">
                                            <a
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                                aria-expanded="true"
                                            >
                                                Men <i className="fa fa-caret-down" />
                                            </a>
                                            <div className="custom-menu">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="hidden-sm hidden-xs">
                                                            <a className="banner banner-1" href="#">
                                                                <img src={images.banner06} alt="Women’s" style={nbStyle} />
                                                                <div className="banner-caption text-center">
                                                                    <h3 className="white-color text-uppercase">Women’s</h3>
                                                                </div>
                                                            </a>
                                                            <hr />
                                                        </div>
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">Categories</h3>
                                                            </li>
                                                            <li>
                                                                <a href="#">Women’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Men’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Phones &amp; Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jewelry &amp; Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bags &amp; Shoes</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="hidden-sm hidden-xs">
                                                            <a className="banner banner-1" href="#">
                                                                <img src={images.banner07} alt="Men’s" style={nbStyle} />
                                                                <div className="banner-caption text-center">
                                                                    <h3 className="white-color text-uppercase">Men’s</h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">Categories</h3>
                                                            </li>
                                                            <li>
                                                                <a href="#">Women’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Men’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Phones &amp; Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jewelry &amp; Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bags &amp; Shoes</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="hidden-sm hidden-xs">
                                                            <a className="banner banner-1" href="#">
                                                                <img src={images.banner08} alt="Accessories" style={nbStyle} />
                                                                <div className="banner-caption text-center">
                                                                    <h3 className="white-color text-uppercase">Accessories</h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">Categories</h3>
                                                            </li>
                                                            <li>
                                                                <a href="#">Women’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Men’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Phones &amp; Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jewelry &amp; Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bags &amp; Shoes</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="hidden-sm hidden-xs">
                                                            <a className="banner banner-1" href="#">
                                                                <img src={images.banner09} alt="Shoes" style={nbStyle} />
                                                                <div className="banner-caption text-center">
                                                                    <h3 className="white-color text-uppercase">Shoes</h3>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <hr />
                                                        <ul className="list-links">
                                                            <li>
                                                                <h3 className="list-links-title">Categories</h3>
                                                            </li>
                                                            <li>
                                                                <a href="#">Women’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Men’s Clothing</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Phones &amp; Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Jewelry &amp; Watches</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bags &amp; Shoes</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row hidden-sm hidden-xs">
                                                    <div className="col-md-12">
                                                        <hr />
                                                        <a className="banner banner-1" href="#">
                                                            <img src={images.banner10} alt="New Collection" style={nbStyle} />
                                                            <div className="banner-caption text-center">
                                                                <h2 className="white-color">NEW COLLECTION</h2>
                                                                <h3 className="white-color font-weak">HOT DEAL</h3>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* /menu nav */}
                            </div>
                        </div>
                    </div>
                    {/* /container */}
                </div>
            </div>
        );
    }
}

export default Navigation;
