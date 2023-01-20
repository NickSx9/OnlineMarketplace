import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import './styles.css';
import {isMobile} from 'react-device-detect';

//images
import image1 from '../images/shopping_img.png';

export class Home extends Component {
  static displayName = Home.name;
  mobileView = () => {
    return <div></div>
  }
  view = () => {
    return (
        <div className='content-main-image'>
            <img className="img-home-main left" src={image1} alt="image" />
        </div>
    );
  }
  render () {
    return (
        <div>
            <NavMenu />
            <div>
                {isMobile ? this.mobileView() : this.view()}
                <div className='content-main-home'>
                    <h1>Online Marketplace</h1>
                    <div>
                        <p>Welcome to The Online Marketplace, where we bring the shopping experience to you! Our platform is designed to provide businesses with a new and innovative way to connect with their customers. By live streaming the receiving, picking, and packing of orders, we allow businesses to showcase their operations and build trust with their followers.</p>
                        <br/>
                        <p>Our interactive feature also allows instant communication between businesses and their customers, making it easy for them to answer any questions or concerns.</p>
                        <br/>
                        <p>For consumers, our platform offers a unique way to search for products and get to know the sellers before committing to a purchase. Follow your favorite businesses and watch their live streams to get a behind-the-scenes look at their operations and products.</p>
                        <br/>
                        <p>Discover new businesses, explore new products and make informed purchasing decisions. Join us now at The Online Marketplace and experience a new way of shopping!</p>
                    </div>
                </div>
            </div>
        </div>
    );
   }
}
