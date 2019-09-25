
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './../Button/Button';

const CallsToActionView = (props) => {

    return <CallsToAction>
        <Button href="https://play.google.com/store/apps/details?id=com.Earthy.keepcalm">Play Our Games</Button>
        <Button href="https://discord.gg/">Develop on Our Discord</Button>
    </CallsToAction>
}

// CallsToActionView.propTypes = {
// }

export default CallsToActionView;

const CallsToAction = styled.div`
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
`