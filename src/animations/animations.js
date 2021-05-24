import React from 'react';
import { bounce,bounceInLeft,bounceInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
 
const animations = {
  bounce: {
    animation: '1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounceInDown: {
    animation: '1s',
    animationName: Radium.keyframes(bounceInDown, 'bounceInDown')
  }
}

export {animations};
