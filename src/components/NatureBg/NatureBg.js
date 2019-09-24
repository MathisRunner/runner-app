import React from 'react';
import {Bg} from './Nature.css';
import Sun from './components/Sun';
import './styles.css';

const NatureView = (props) => {
    return <Bg>
        <Sun className="nature-sun" />
        {/* <h1>hello</h1> */}
    </Bg>
}

export default NatureView;