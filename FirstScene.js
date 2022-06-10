


/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Pull in all imports required for the controls within this scene.
 */
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

/**
 * Set all the images and assets required in this scene.
 */
var westLakeTowersScene = require('./FirstScene');
var weworkImage = require('./res/wework_title.png');

export default class MainScene extends Component {
  constructor() {
    super();

    // set initial state
    this.state = {
      runShowTitleAnimation : false,
    }

    // bind `this` to functions
    this._onBackgroundPhotoLoadEnd = this._onBackgroundPhotoLoadEnd.bind(this);
    this._onTitleClicked = this._onTitleClicked.bind(this);
  }

  /**
   * Renders a scene with a 360 Photo background that contains a single WeWork ViroImage. This
   * image will be faded/scaled in with the "showTitleAnimation" when the scene first appears. Clicking on
   * the WeWork ViroImage will launch the user into the next scene (WestLakeTowers).
   */
  render() {
    return (
      <ViroScene style={styles.container}>
          <Viro360Image source={require('./res/dark_theatre.jpg')} />

          <ViroVideo
          source={require("./res/shoot-1.mp4")}
          volume={1.0}
          loop={true}
          position={[0, 3.9, -45]}
          scale={[44, 22, 1]}
          stereoMode={'leftRight'}
          />



      </ViroScene>
    );
  }

  /**
   * Callback function for when image has finished loading in the Viro360Photo.
   * We then animate the WeWork ViroImage into the scene through the
   * setting of state runShowTitleAnimation.
   */
  _onBackgroundPhotoLoadEnd() {
      this.setState({
          runShowTitleAnimation:true
      });
  }

  /**
   * Callback function for when the user taps on the WeWork ViroImage
   * where we navigate into the second scene.
   */
  _onTitleClicked() {
      this.props.sceneNavigator.push({scene:westLakeTowersScene});
  }
}

/**
 * Declare all custom flex box styles here to be reference by the
 * controls above.
 */
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
    showTitleAnimation: {properties:{scaleX:2, scaleY:2, scaleZ:2, opacity:1.0}, easing:"PowerDecel", duration:1000},
});

module.exports = MainScene;
