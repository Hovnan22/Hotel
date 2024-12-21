import { ReactNode } from 'react';
import { ImageSourcePropType } from 'react-native';
import { SvgProps } from "react-native-svg";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREENS } from '../const/screens';

export  interface CustomSvgProps extends SvgProps {
    isActive?: boolean; 
}

export  type HotelList =  {
    id: number,
    imageUrl: ImageSourcePropType,
    distanse: string,
    rating: string,
    name: string,
    priceCategory: number,
    bookingLogo: ImageSourcePropType,
    buttonLink: string
}

  type HotelDetails =  {
    id: number,
    image: ImageSourcePropType,
    name: string,
    overview: string,
    buttonLink: string,
}

export type Hotels = {
    [key: number]: HotelDetails;
  };

export type WrapperPropsTypes = {
    children: ReactNode ;
    showBackButton?: boolean;
    useStatusBarArea?: boolean;
    styles?: object 
};

export type ImageType = {
    uri: ImageSourcePropType,
    styles?: object
}

export type HotelCardProps = {
    hotel: HotelList
}

export type TextProps = {
    text: string,
    style?: object,
    numberOfLines?: number,
    children?: ReactNode ;
}

export type ButtonProps = {
    text: string,
    onPress: () => void,
    buttonStyle?: object,
}

 export type RootStackParamList = {
  [SCREENS.ZOFTIFY]: {
    uri: string; 
  };
  [SCREENS.CONTACTS]: undefined,
  [SCREENS.EXPLORE]: undefined,
  [SCREENS.HOTEL]: undefined,
  [SCREENS.INFORMATION]: undefined,
  [SCREENS.STADUMS]: undefined,
  [SCREENS.TAB_NAVIGATION]: undefined,

};

export type ZoftifyScreenProps = NativeStackScreenProps<RootStackParamList, SCREENS.ZOFTIFY>;


export type  AppProviderProps = {
    children: ReactNode;
}

export type AppContextType = {
    setSelectHotel: (hotelId: number) => void;
    selectedHotel: number | undefined;
  };