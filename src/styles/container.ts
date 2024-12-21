import {StyleSheet} from 'react-native';
import {GRAY} from '../const/colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {widthPercentageToDP} from '../utils/sizes';

export const ContainerStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: GRAY.G00,
    flex: 1,
  },
  statusBarArea: {
    paddingTop: getStatusBarHeight(),
  },
  backButton: {
    position: 'absolute',
    top: getStatusBarHeight() + widthPercentageToDP(3.2),
    left: widthPercentageToDP(2.1),
    backgroundColor: GRAY.G00,
    borderRadius: 32,
    width: widthPercentageToDP(10.7),
    height: widthPercentageToDP(10.7),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
