import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";

import { useAppContext } from "../../store/appStore";
import { HotelsDetails } from "../../data/data";
import WrapperContainer from "../../components/Container";
import HImage from "../../components/ui/HImage";
import HTitle from "../../components/ui/HTitle";
import HSubtitle from "../../components/ui/HSubtitle";
import HBodyM from "../../components/ui/HBodyM";
import HButton from "../../components/ui/HButton";
import { SCREENS } from "../../const/screens";
import { styles } from "./style";




export default function Hotel(): React.JSX.Element {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
     const { selectedHotel } = useAppContext();
     const insets = useSafeAreaInsets();

    const checkAvailability = (uri: string) => {
        navigation.navigate(SCREENS.ZOFTIFY, {uri: uri})
    }
     return(
        <WrapperContainer showBackButton useStatusBarArea={true} styles={[styles.grayBG, {marginBottom: insets.bottom}]}>
        {selectedHotel && (
            <>
                <ScrollView>
                  <HImage
                    styles={styles.image}
                    uri={HotelsDetails[selectedHotel].image}
                  />
                  <View style={styles.description}>
                      <HTitle text={HotelsDetails[selectedHotel].name} />
                      <HSubtitle text="Overview" style={styles.subtitle} />
                      <HBodyM text={HotelsDetails[selectedHotel].overview} />
                  </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <HButton onPress={() => checkAvailability(HotelsDetails[selectedHotel].buttonLink)} text="Check availability" />
                </View>
            </>
        )}
      </WrapperContainer>
    )
}

