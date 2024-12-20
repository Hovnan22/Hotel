import { StyleSheet } from "react-native";
import { GRAY } from "../const/colors";

export const TextStyles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: 32,
        fontFamily: 'Poppins',
        color: GRAY.G100
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 28,
        fontFamily: 'Poppins',
        color: GRAY.G100
    },
    tabBar: {
        fontSize: 11,
        fontWeight: 500,
        lineHeight: 16,
        fontFamily: 'Poppins',
        textAlign: 'center'
    },
    bodyM: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: 'Poppins',
        color: GRAY.G100
    },
    bodyS: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Poppins',
        color: GRAY.G100
    },
    semibold: {
        fontWeight: 600,
    },
    medium: {
        fontWeight: 500,
    },
    regular: {
        fontWeight: 400,
    }

})