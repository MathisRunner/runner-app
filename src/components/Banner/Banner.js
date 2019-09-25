import React from 'react';
import {Banner, CallsToAction} from './Banner.css.js';
import Img from "gatsby-image"
import PropTypes from 'prop-types';
import Button from './../Button/Button';

const BannerView = (props) => {
    const renderImg = () => {
        if(props.img){
            return <Img fluid={props.img.childImageSharp.fluid} />
        }
    }

    return <Banner >
        <div className="banner-img">
        {renderImg()}
        </div>
    </Banner>
}

BannerView.propTypes = {
    img: PropTypes.object,
    actions: PropTypes.array
}

export default BannerView;