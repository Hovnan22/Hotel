import {StyleSheet} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from '../utils/sizes';
import {GRAY, PRIMARY, SECONDARY} from '../const/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: widthPercentageToDP(4.2),
    borderRadius: 24,
    borderColor: GRAY.G10,
    borderWidth: 1,
    marginBottom: heightPercentageToDP(1.3),
  },
  image: {
    width: widthPercentageToDP(100) - widthPercentageToDP(8.4),
    objectFit: 'fill',
  },
  description: {
    marginHorizontal: widthPercentageToDP(4.2),
    paddingVertical: heightPercentageToDP(1.9),
  },
  rowBox: {
    flexDirection: 'row',
  },
  centered: {
    textAlign: 'center',
    alignItems: 'center',
  },
  walkingText: {
    marginLeft: widthPercentageToDP(1.1),
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  rating: {
    backgroundColor: PRIMARY.P05,
    borderRadius: 6,
    padding: widthPercentageToDP(1),
  },
  ratingValue: {
    marginLeft: heightPercentageToDP(1.1),
    color: PRIMARY.P120,
  },
  name: {
    flexWrap: 'nowrap',
    paddingTop: heightPercentageToDP(0.8),
    paddingBottom: heightPercentageToDP(1.7),
  },
  priceBoxTitleActive: {
    backgroundColor: SECONDARY.S10,
    paddingHorizontal: widthPercentageToDP(2.1),
    fontWeight: 600,
    color: SECONDARY.S100,
    borderRadius: 6,
  },
  priceBoxTitleInactive: {
    color: SECONDARY.S20,
    fontWeight: 600,
  },
});
