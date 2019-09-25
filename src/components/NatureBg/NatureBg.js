import React from 'react';
import {Bg} from './Nature.css';
import Sun from './components/Sun';
import Trees from './components/Trees';
import Hill from './components/Hill';
import './styles.css';

const NatureView = (props) => {
    return <Bg>
        <Sun className="nature-sun" />
        {/* <h1>hello</h1> */}
        <Hill />
        <Trees />
    </Bg>
}

export default NatureView;
/**
 *   hill1: 'cyan',
  hill2: 'blue',
  sun: 'yellow',
  sky: 'red'
 */