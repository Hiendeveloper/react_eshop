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

class Section_grey extends Component {
    render() {
        return (
            <div>
                <div className="section section-grey">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* banner */}
                            <div className="col-md-8">
                                <div className="banner banner-1">
                                    <img src={images.banner13} alt="Hot Deal" style={nbStyle} />
                                    <div className="banner-caption text-center">
                                        <h1 className="primary-color">
                                            HOT DEAL
                                            <br />
                                            <span className="white-color font-weak">Up to 50% OFF</span>
                                        </h1>
                                        <button className="primary-btn">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                            {/* /banner */}
                            {/* banner */}
                            <div className="col-md-4 col-sm-6">
                                <a className="banner banner-1" href="#">
                                    <img src={images.banner11} alt="New Collection" style={nbStyle} />
                                    <div className="banner-caption text-center">
                                        <h2 className="white-color">NEW COLLECTION</h2>
                                    </div>
                                </a>
                            </div>
                            {/* /banner */}
                            {/* banner */}
                            <div className="col-md-4 col-sm-6">
                                <a className="banner banner-1" href="#">
                                    <img src={images.banner12} alt="New Collection" style={nbStyle} />
                                    <div className="banner-caption text-center">
                                        <h2 className="white-color">NEW COLLECTION</h2>
                                    </div>
                                </a>
                            </div>
                            {/* /banner */}
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                </div>
            </div>
        );
    }
}

export default Section_grey;
