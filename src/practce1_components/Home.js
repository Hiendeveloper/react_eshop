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

class Home extends Component {
  render() {
    return (
      <div>
        <div id="home">
          {/* container */}
          <div className="container">
            {/* home wrap */}
            <div className="home-wrap">
              {/* home slick */}
              <div id="home-slick">
                {/* banner */}
                <div className="banner banner-1">
                  <img src={images.banner01} alt="" style={nbStyle} />

                  <div className="banner-caption text-center">
                    <h1>Bags sale</h1>
                    <h3 className="white-color font-weak">Up to 50% Discount</h3>
                    <button className="primary-btn">Shop Now</button>
                  </div>
                </div>
                {/* /banner */}
                {/* banner */}
                <div className="banner banner-1">
                  <img src={images.banner02} alt="" style={nbStyle} />

                  <div className="banner-caption">
                    <h1 className="primary-color">
                      HOT DEAL
                      <br />
                      <span className="white-color font-weak">Up to 50% OFF</span>
                    </h1>
                    <button className="primary-btn">Shop Now</button>
                  </div>
                </div>
                {/* /banner */}
                {/* banner */}
                <div className="banner banner-1">
                  <img src={images.banner03} alt="" style={nbStyle} />
                  <div className="banner-caption">
                    <h1 className="white-color">
                      New Product <span>Collection</span>
                    </h1>
                    <button className="primary-btn">Shop Now</button>
                  </div>
                </div>
                {/* /banner */}
              </div>
              {/* /home slick */}
            </div>
            {/* /home wrap */}
          </div>
          {/* /container */}
        </div>
      </div>
    );
  }
}

export default Home;
