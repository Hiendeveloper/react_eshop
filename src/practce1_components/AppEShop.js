import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import Section from './Section';
import Section_grey from './Section_grey';
import Footer from './Footer';
import  '../css/style.css';
import '../css/slick.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/nouislider.min.css';



class AppEShop extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <Home />
                <Section />
                <Section_grey />
                <Footer />
            </div>
        );
    }
}

export default AppEShop;