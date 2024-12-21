import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "../../utils/sizes";
import { GRAY } from "../../const/colors";

export const styles = StyleSheet.create({
    image: {
        width: widthPercentageToDP(100),
        objectFit: 'fill'
    },
    description: {
        marginHorizontal: widthPercentageToDP(4.2),
        marginTop: widthPercentageToDP(5.3)
    },
    grayBG: {
        backgroundColor: GRAY.G05,
    },
    subtitle: {
        marginTop: widthPercentageToDP(10),
        marginBottom: widthPercentageToDP(4.2)
    },
    buttonContainer: {
        backgroundColor: GRAY.G00,
        paddingHorizontal: widthPercentageToDP(4.2),
        paddingTop: widthPercentageToDP(4.2),
    }
})