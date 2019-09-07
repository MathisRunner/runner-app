import React from 'react';
import {Content} from './Card.css';

const Card = (props) => {
    return <Content>
        <div className="cardcontent">
            {props.children}
        </div>
    </Content>
}

export default Card;