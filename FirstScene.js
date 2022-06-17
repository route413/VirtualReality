'use strict';

import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroScene,
  ViroARScene,
  Viro360Image,
  ViroImage,
  ViroSphere,
  ViroARPlane,
  ViroBox,
  ViroAnimations,
  ViroVideo,
  ViroNode,
  ViroText
} from '@viro-community/react-viro';

let video = require("./res/vr-2.mp4");

export default class FirstScene extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  vrScene() {
    return (
      <ViroScene>
        <ViroText
          fontSize={40}
          text="Hello There"
          width={2}
          height={2}
          position={[0, 0, -1]}
          textAlign="center"
          textAlignVertical="center"
          color="#ffffff"
        />
      </ViroScene>
    )
  }

  // VR SECTION
  render() {

    //return this.vrScene()

    return (
      <ViroScene style={styles.container}>
        <ViroNode>
          <ViroVideo
            source={video}
            volume={1.0}
            loop={true}
            position={[0, 0, -1]}
            scale={[2, 2, 2]}
            stereoMode={'leftRight'}
          />
        </ViroNode>
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
  showTitleAnimation: {
    properties: {scaleX: 2, scaleY: 2, scaleZ: 2, opacity: 1.0},
    easing: "PowerDecel",
    duration: 1000
  },
});

module.exports = FirstScene;
