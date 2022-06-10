import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroTrackingStateConstants,
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
  ViroSceneNavigator,
} from '@viro-community/react-viro';

import FirstScene from './FirstScene';

var vrScenes = {
  'FirstScene': require('./FirstScene'),
}

// VR SECTION
export default () => {
  return (
    <ViroVRSceneNavigator
      initialScene={{
        scene: require('./FirstScene'),
      }}
    />
  );
};

// AR SECTION
// export default () => {
//   return (
//     <ViroARSceneNavigator
//       initialScene={{
//         scene: require('./FirstScene'),
//       }}
//     />
//   );
// };

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
