import styled from 'styled-components';

export const Banner = styled.div`
  height: 30%;
  background-color: ${props => props.theme.primary};
  position: relative;
  .banner-img{
        
        position: absolute;
        bottom:0px; 
        right:0px; left: 0px;
  }
`

export const CallsToAction = styled.div`
    position: absolute;
    bottom:0px; left:0px; right:0px;
    padding:10px;
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  .my-button{
      min-width: 30%;
  }
  .my-button:nth-child(1){
    animation-delay: 1s;
  }
  .my-button:nth-child(2){
    animation-delay: 1.3s;
  }
  .my-button{
    translate: transform 0.3s ease;
    &:hover{
        transform: scale(1.2) !important;
    }
  }

`