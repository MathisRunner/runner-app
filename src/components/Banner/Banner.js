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
    const renderCallsToAction = () => {
        return <CallsToAction>
            <Button href="https://play.google.com/store/apps/details?id=com.Earthy.keepcalm">Play Our Games</Button>
            <Button href="https://discord.gg/">Develop on Our Discord</Button>
        </CallsToAction>
    }
    return <Banner >
        <div className="banner-img">
        {renderImg()}
        {renderCallsToAction()}
        </div>
    </Banner>
}

BannerView.propTypes = {
    img: PropTypes.object,
    actions: PropTypes.array
}

export default BannerView;