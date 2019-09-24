import styled from 'styled-components';

export const Button = styled.button`
  
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    border-radius: 8px;
    transform: translateY(-100%);
    opacity:0;
    animation: slideDown 1s ease 1s forwards;
    border: none;
    outline:0;
    span{
        display: block;
        transition: transform ${props => props.theme.animS} ease;
        &:hover{
            transform: scale(1.2);
        }
    }
    padding: 5px;
    font-size: ${props => props.theme.fontS};
    @media (min-width: ${props => props.theme.breakS}){
        padding: 10px 20px;
        font-size: ${props => props.theme.fontL};
    }
`
export const Link = styled.a`
    display: block;
    background-color:  ${props => props.theme.primary};
    color: ${props => props.theme.text};
    border-radius: 8px;
    transform: translateY(-100%);
    opacity:0;
    animation: slideDown 1s ease 1s forwards;
    text-align: center;
    text-decoration: none;
    span{
        display: block;
        transition: transform ${props => props.theme.animS} ease;
        &:hover{
            transform: scale(1.2);
        }
    }
    padding: 5px;
    font-size: ${props => props.theme.fontS};
    @media (min-width: ${props => props.theme.breakS}){
        padding: 10px 20px;
        font-size: ${props => props.theme.fontL};
    }
`