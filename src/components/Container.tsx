import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ContainerStyles } from "../styles/container";
import { WrapperPropsTypes } from "../types/types";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import LeftArrow from "../assets/icons/leftArrow";

  const WrapperContainer: React.FC<WrapperPropsTypes> = ({children, showBackButton, useStatusBarArea, styles}) :React.JSX.Element => {
    const navigation: NavigationProp<ParamListBase> = useNavigation();

    const goBack = () => {
        navigation.canGoBack() && navigation.goBack()
    }

    return (
        <View style={[ContainerStyles.wrapper,styles,!useStatusBarArea && ContainerStyles.statusBarArea]}>
            {children}
             {
                showBackButton && (
                <TouchableOpacity style={ContainerStyles.backButton} onPress={goBack}>
                    <LeftArrow />
                </TouchableOpacity>
                )
            }
        </View>
    )
}

export default WrapperContainer

