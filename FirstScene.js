'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroScene,
  ViroARScene,
  Viro360Image,
  ViroImage,
  ViroAnimations,
  ViroVideo,
  ViroNode,
  ViroText
} from '@viro-community/react-viro';

export default class MainScene extends Component {
  constructor() {
    super();
  }

  // VR SECTION
  render() {
    return (
      <ViroScene style={styles.container}>
        <ViroVideo
          source={require("./res/vr-1.mp4")}
          volume={1.0}
          loop={true}
          stereoMode={'leftRight'}
        />
      </ViroScene>
    );
  }

  // AR SECTION
  // render() {
  //   return (
  //     <ViroARScene style={styles.container}>
  //       <Viro360Image source={require('./res/dark_theatre.jpg')} />
  //
  //       <ViroVideo
  //         source={require("./res/mining.mp4")}
  //         volume={1.0}
  //         loop={true}
  //         position={[0, 3.9, -45]}
  //         scale={[44, 22, 1]}
  //       />
  //     </ViroARScene>
  //   );
  // }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    },
});

/**
 * Declare all your animations here. They'll be referenced by the animation props.
 */
ViroAnimations.registerAnimations({
    showTitleAnimation: { properties:{scaleX:2, scaleY:2, scaleZ:2, opacity:1.0 }, easing: "PowerDecel", duration: 1000 },
});

module.exports = MainScene;
