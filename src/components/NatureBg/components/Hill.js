import React, { useEffect, useState, useLayoutEffect  } from 'react';
import styled from 'styled-components';

function useWindowSize() {
    let [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const HillView = (props) => {

    let [width, height] = useWindowSize();

    console.log(`NatureBg trees dimensions width ${width} height ${height}`);
    return <Hill>
<svg
   width="100%"
   height="100%"
   viewBox="0 0 180 95"
   version="1.1" preserveAspectRatio="none"
   id="svg8">
  <g
     id="layer1">
         <path className="hill hill1"
         id="path823"
         d="m 0,97.27392 0.0387505,-30.32304 c 0,0 17.38690383,-16.63094 32.69493983,-17.76487 19.84375,-2.07887 29.860118,20.41072 41.766368,21.35566 13.418155,0.56696 45.546126,-34.77381 65.578866,-34.20685 18.14286,-4.53571 39.12054,11.52827 50.12054,11.52827 l 0.0695,49.41083 z"
          />
         <path className="hill hill2"
         d="m 0,97.27392 0.0387505,-25.40935 C 3.2127976,71.48659 13.418154,56.93452 24.568452,55.80059 c 18.143765,0.75595 21.89982,32.78461 35.718749,34.77382 8.687832,-2.07983 19.70313,-20.69705 40.001459,-3.78951 2.71051,2.25773 10.50287,2.09282 12.94875,-0.22363 9.24078,-8.75177 17.96152,-21.02792 29.4486,-21.50026 16.71307,-1.5119 22.48958,17.19792 45.85268,17.95387 l 0.0695,14.25904 z"
         id="path834" />


  </g>
</svg>
    </Hill>
}
export default HillView;
//scaleIn
const Hill = styled.div`
    position: fixed;
    top:0px;
    bottom:0px;
    left: 0px;
    right:0px;
    overflow: hidden;
    .flip{
        width: 100%;
        bottom:0px;
    }
    .hill{
        transform: translateY(100%);
        animation: slideUp 1s ease 0s forwards;
    }
    .hill1{
        animation-delay: 1s;
        fill: ${props => props.theme.hill1}
    }
    .hill2{
        animation-delay: 1.5s;
        fill: ${props => props.theme.hill2}
    }
`