import React from 'react';
import styled from 'styled-components';
import {withTheme} from 'styled-components';

const Sun = (props) => {
    return <CelestialBody className={props.className}>
        {/* <Orb /> */}
            <svg width="300%" height="300%" viewbox="0 0 100 100">
                <defs>
                    <linearGradient id="e" x1="40" y1="210" x2="460" y2="210" 
                    gradientUnits="userSpaceOnUse" >
                        <stop stopColor={props.theme.sun} offset="0" />
                    </linearGradient>
                </defs>
                    <circle cx="50%" cy="50%" r="809" className="price-halo-circle" stroke="url(#e)" 
                            strokeDasharray="105,175.8" strokeWidth="1500" fill="none" />

                    <circle cx="50%" cy="50%" r="50" className="price-halo-circle-center" fill={props.theme.sun} />
                </svg>
    </CelestialBody>
}

export default withTheme(Sun);
const CelestialBody = styled.div`
    display: inline-block;
    height:100%; width:100%;
    opacity:0;
    animation: dropIn 1s ease 0.5s forwards;
    svg{
        animation: fullRotate 30s linear 0s infinite;
    }
`;

