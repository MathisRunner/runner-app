import React from 'react';
import {Content} from './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
    return <Content center={props.center}>
        <div className="cardcontent">
            {props.children}
        </div>
    </Content>
}

Card.propTypes = {
    center: PropTypes.bool //changes the layout from in flow, to from floating and centered out of flow
}

export default Card;