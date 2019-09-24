import React from 'react';
import styled from 'styled-components';

const Sun = (props) => {
    return <CelestialBody className={props.className}>
        {/* <Orb /> */}
            <svg width="300%" height="300%" viewbox="0 0 100 100" className="price-halo">
                <defs>
                    <linearGradient id="e" x1="40" y1="210" x2="460" y2="210" 
                    gradientUnits="userSpaceOnUse" >
                        <stop stopColor="yellow" offset="0" />
                    </linearGradient>
                </defs>
                    <circle cx="50%" cy="50%" r="809" className="price-halo-circle" stroke="url(#e)" 
                            strokeDasharray="105,175.8" strokeWidth="1500" fill="none" />

                    <circle cx="50%" cy="50%" r="50" className="price-halo-circle-center" fill="yellow" />
                </svg>
    </CelestialBody>
}

export default Sun;
const CelestialBody = styled.div`
    display: inline-block;
    
    height:100%; width:100%;
    svg{
        animation: fullRotate 8s linear 0s infinite;
    }
`;
const Orb = styled.div`
    
    width:100px;
    height:100px;
    background-color: yellow;
    outline: 40px dashed blue;
`

const Item = styled.div`
margin: 10px auto;
border-radius: 50%;

.price-halo{
    z-index: 3;
    position: absolute;
    top: 0px; right: 0px; left: 0px; bottom: 0px;
}
.price-halo-circle{
    animation: sunshine 15s linear 1s infinite;
    transform-origin: 50%;
    
}
.details{
    z-index: 4;
    position: absolute;
    top: 0px; right: 0px; left: 0px; bottom: 0px;
    align-self: stretch;
    display: inline-block;
    position: relative;
    background-image: radial-gradient(yellow,  transparent);
    border-radius: 50%;
    width: 90%;
    height: 90%;
    margin: 5%;
    box-sizing: border-box;
    color: red;
    .details-content{
       
        padding: 20px;
        .details-price{
            text-align: center;
            color: black;
        }
        .details-title{
            font-size: 1.2em;
            text-align: center;
            margin-bottom: 10px;
            color: black;
            font-weight: bold;
        }
        .details-list{
            text-align: center;
            list-style-type: none;
            li::before {content: "•"; color: black;
display: inline-block; width: 1em;
margin-left: 1em}
            p{
                display: inline;
                color: black;
            }
        }
    }
}

`
// const Ray = styled.div`
//     width: 30px;
//     height: 100px;
//     background-color: orange;
// `
/**
 * 
 * 
 * <Item >
                <svg width="100%" height="100%" className="price-halo">
                <defs>
                    <linearGradient id="e" x1="40" y1="210" x2="460" y2="210" 
                    gradientUnits="userSpaceOnUse" >
                        <stop stopColor="white" offset="0" />
                    </linearGradient>
                </defs>
                    <circle cx="50%" cy="50%" r="99" className="price-halo-circle" stroke="url(#e)" 
                            strokeDasharray="5,15.7" strokeWidth="90" fill="none" />
                </svg>
                <div className="details rounded">
                    <div className="details-content ">
                        <p className="details-price">from ${e.price}</p>
                        <h3 className="details-title">{e.title}</h3>
                        <ul className="details-list">
                            {e.details.map((d, id) => {
                                return <li key={id}><p >{d.text}</p></li>
                            })}
                        </ul>
                    </div>
                </div>
            </Item>
 */