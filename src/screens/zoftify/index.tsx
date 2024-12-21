import React from 'react';
import WebView from 'react-native-webview';
import {ZoftifyScreenProps} from '../../types/types';

const Zoftify: React.FC<ZoftifyScreenProps> = ({route}) => {
  const {uri} = route.params;
  return <WebView source={{uri}} />;
};

export default Zoftify;
