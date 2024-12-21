import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import {HotelCardProps} from '../types/types';
import HImage from './ui/HImage';
import HBodyS from './ui/HBodyS';
import Walking from '../../assets/icons/walkin';
import Star from '../../assets/icons/star';
import HBodyM from './ui/HBodyM';
import HButton from './ui/HButton';
import {SCREENS} from '../const/screens';
import {useAppContext} from '../store/appStore';
import {styles} from '../styles/hotelCard';

const HotelCard: React.FC<HotelCardProps> = ({hotel}): React.JSX.Element => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {setSelectHotel} = useAppContext();
  const dolar: string = '$';
  const maxPriceCategory: number = 4;

  const navigateToZoftify = () => {
    navigation.navigate(SCREENS.ZOFTIFY, {uri: hotel.buttonLink});
  };

  const openHotelDetails = () => {
    setSelectHotel(hotel.id);
    navigation.navigate(SCREENS.HOTEL);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={openHotelDetails}>
      <HImage uri={hotel.imageUrl} styles={styles.image} />
      <View style={styles.description}>
        <View style={[styles.rowBox, styles.spaceBetween]}>
          <View style={[styles.rowBox, styles.centered]}>
            <Walking />
            <HBodyS text={hotel.distanse} style={styles.walkingText} />
          </View>
          <View style={[styles.rowBox, styles.centered, styles.rating]}>
            <Star />
            <HBodyS text={hotel.rating} style={styles.ratingValue} />
          </View>
        </View>
        <HBodyM numberOfLines={1} text={hotel.name} style={styles.name} />
        <View style={[styles.rowBox, styles.spaceBetween]}>
          <View style={styles.spaceAround}>
            <HBodyS
              text={dolar.repeat(hotel.priceCategory)}
              style={styles.priceBoxTitleActive}>
              <HBodyS
                style={styles.priceBoxTitleInactive}
                text={dolar.repeat(maxPriceCategory - hotel.priceCategory)}
              />
            </HBodyS>
            <HImage uri={hotel.bookingLogo} />
          </View>
          <HButton onPress={navigateToZoftify} text="View prices" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;
