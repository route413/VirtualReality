import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroVRSceneNavigator,
  ViroImage,
  Viro360Image,
  ViroVideo,
  Viro360Video,
} from '@viro-community/react-viro';

class DealerUnits extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <ViroARScene>
          <Viro360Image
            source={require('./res/westlake_towers.jpg')}
          />

          
        </ViroARScene>
      );
  }
}

export default DealerUnits;
