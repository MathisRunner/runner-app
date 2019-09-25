import React, { useEffect, useState, useLayoutEffect  } from 'react';
import styled from 'styled-components';
import TreeVector from '../../../img/plant.svg';
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
  const MAX_TREES = 10;
const TreeView = (props) => {
    const createTree = (index, width) => {
        let offset = 30*Math.random();
        return  {x: `${index * (width/MAX_TREES) - width*0.35}`, height: `${100 - offset}%`, y: `${10*offset}`};
    }
    let [width, height] = useWindowSize();
    const [trees, setTrees] = useState([]);
    useEffect(()=>{
        if(timeout) clearTimeout(timeout);
        let timeout = null;
        if(trees.length < MAX_TREES){
            timeout = setTimeout(()=>{
                setTrees([
                    ...trees,
                    createTree(trees.length, width)
                ])
            }, 2000);
        }
        return () => {
            if(timeout) clearTimeout(timeout);
        }
    }, [trees, width])
    console.log(`NatureBg trees dimensions width ${width} height ${height}`);
    return <Trees>
        <svg width="100%" height="100%" viewbox="0 0 100 100" className="price-halo">
            {trees.map(e => {
                return <image href={TreeVector} height={e.height} x={e.x} y={e.y} className="tree" fill="black" stroke="black" />
            })}
        </svg>
    </Trees>
}
export default TreeView;
//scaleIn
const Trees = styled.div`
    position: fixed;
    top:40%;
    bottom:-200px;
    left: 0px;
    right:0px;
    .tree{
        transform-origin: 50% 100%;
        opacity: 1;
        fill: ${props => props.theme.trees};
        animation: scaleIn 3s ease 0s forwards;
    }
`