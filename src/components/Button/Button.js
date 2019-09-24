import React from 'react';
import PropTypes from 'prop-types';
import {Button, Link} from './Button.css.js';
import './styles.css';

const ButtonView = (props) => {
    if(props.href){
        return <Link href={props.href} className="my-button shadow">
        <span>{props.children}</span>
    </Link>
    }else{
        return <Button className="my-button shadow">
         <span>{props.children}</span>
    </Button>
    }

}

ButtonView.propTypes={
    href: PropTypes.string //if present, button becomes an a tag
}

export default ButtonView;