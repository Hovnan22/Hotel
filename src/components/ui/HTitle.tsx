import React from 'react';
import {Text} from 'react-native';
import {TextProps} from '../../types/types';
import {TextStyles} from '../../styles/texts';

const HTitle: React.FC<TextProps> = ({text}): React.JSX.Element => (
  <Text style={TextStyles.title}>{text}</Text>
);

export default HTitle;
