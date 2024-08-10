import React, { Component } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import Section from './Section';
import Section_grey from './Section_grey';
import './styles/other-styles.css';
class AppEShop extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <Home />
                <Section/>
                <Section/>
                <Section_grey/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}

export default AppEShop;