import { Dimensions, PixelRatio, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const widthPercentageToDP = (widthPercent: number): number => {
  const screenWidth = Dimensions.get('window').width;

  const elemWidth: number = parseFloat(widthPercent.toString());
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: number): number => {
  const screenHeight = Platform.OS === 'ios' && +DeviceInfo.getModel().slice(-2) > 8 ? Dimensions.get('window').height - getStatusBarHeight() : Dimensions.get('window').height;

  const elemHeight = parseFloat(heightPercent.toString());
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { widthPercentageToDP, heightPercentageToDP };
