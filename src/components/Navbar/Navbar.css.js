import styled from 'styled-components';

export const Nav = styled.nav`
    z-index: 3;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    padding-top: 20px;
    .container-left{
        display: inline-block;
        margin-left: 10%;
        z-index: 3;
    }
    .navbar-brand, .navbar-menu, .navbar-item{
        display: inline-block;
        color: ${props => props.theme.text};
        z-index: 3;
    }
    .navbar-brand{
        padding-right: 20px;
    }
    .navbar-item{
        padding: 0px 10px;
    }
`