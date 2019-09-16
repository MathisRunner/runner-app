import styled from 'styled-components';

export const Content = styled.div`
  max-width: 800px;
  top: 50%; left: 50%;
  min-width: 300px;
  width: 90%;
  max-height: 80vh;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
  background-image: linear-gradient(25deg, ${props => props.theme.primary}, ${props => props.theme.secondary});
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  .cardcontent{
    width: 100%; 
    max-height:100%;
    overflow: auto;
  }

`