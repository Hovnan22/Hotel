import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { GRAY, PRIMARY } from "../../const/colors";
import { widthPercentageToDP } from "../../utils/sizes";
import HBodyS from "./HBodyS";
import { ButtonProps } from "../../types/types";


const HButton: React.FC<ButtonProps> = ({text,onPress, buttonStyle}): React.JSX.Element =>    (
<TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
    <HBodyS text={text} style={styles.text}/>
</TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: PRIMARY.P100,
        paddingHorizontal: widthPercentageToDP(5.3),
        paddingVertical: widthPercentageToDP(3.2),
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: GRAY.G00,
        fontWeight: 600,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default HButton