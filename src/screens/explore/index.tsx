import { NavigationAction, NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text,TouchableOpacity,View } from "react-native";
import { SCREENS } from "../../const/screens";


export default function Expolrer(): React.JSX.Element {
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    

    return(
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.HOTEL)}>
            <Text>Expolrer</Text>
            </TouchableOpacity>
        </View>
    )
}