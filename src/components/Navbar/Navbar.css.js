import styled from 'styled-components';

export const Nav = styled.nav`
    z-index: 3;
    height: 75px;
    .container-left{
        display: inline-block;
        margin-left: 10%;
        z-index: 3;
    }
    .navbar-brand, .navbar-menu, .navbar-item{
        display: inline-block;
        color: ${props => props.theme.text};
        line-height: 75px;
        z-index: 3;
    }
    .navbar-brand{
        padding: 0px 20px;
    }
    .navbar-item{
        padding: 0px 10px;
    }
`