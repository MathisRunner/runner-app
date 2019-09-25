import styled from 'styled-components';

export const Bg = styled.div`
    position: fixed;
    top:0px; left:0px; right:0px; bottom:0px;
    background-color: ${props => props.theme.sky};
    z-index: 1;
    overflow: hidden;
    .nature-sun{
        position: absolute;
        left: -120%;
        top: -120%;
    }
`