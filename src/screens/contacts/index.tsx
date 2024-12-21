import React from 'react';
import {Text, View} from 'react-native';
import WrapperContainer from '../../components/Container';
import HTitle from '../../components/ui/HTitle';

export default function Contacts(): React.JSX.Element {
  return (
    <WrapperContainer>
      <HTitle text="CONTACTS" />
    </WrapperContainer>
  );
}
