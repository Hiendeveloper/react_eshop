import React, { Component } from 'react';

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
                                    <img src="./img/banner13.jpg" alt="" />
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
                                    <img src="./img/banner11.jpg" alt="" />
                                    <div className="banner-caption text-center">
                                        <h2 className="white-color">NEW COLLECTION</h2>
                                    </div>
                                </a>
                            </div>
                            {/* /banner */}
                            {/* banner */}
                            <div className="col-md-4 col-sm-6">
                                <a className="banner banner-1" href="#">
                                    <img src="./img/banner12.jpg" alt="" />
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