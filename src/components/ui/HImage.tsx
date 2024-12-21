import React from 'react';
import {Image} from 'react-native';
import {ImageType} from '../../types/types';

const HImage: React.FC<ImageType> = ({uri, styles}): React.JSX.Element => (
  <Image source={uri} style={styles} />
);

export default HImage;
