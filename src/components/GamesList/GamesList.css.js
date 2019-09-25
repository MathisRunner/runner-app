import styled from 'styled-components';

export const Post = styled.span`
    display: block;
    margin: 20px 0px;
    padding: 20px;
    background-image: linear-gradient(25deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.text};
    font-size: 1.2rem;
`
export const List = styled.ul`
    list-decoration: none;
    margin: 10px 0;
    padding: 10px;
    
    width: 50%;
    min-width: 480px;
    margin: auto;

    ${props=> {
        var s = '';
        for(let i = 0; i<props.itemCount; i++){
            s += `
                .list-item:nth-child(${i}){
                    animation-delay: ${i*0.5}s;
                };
            `
        }
        return s;
    }}
`