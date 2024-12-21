import { Text } from "react-native";
import { TextProps } from "../../types/types";
import { TextStyles } from "../../styles/texts";


const HBodyM:  React.FC<TextProps> = ({text, style, numberOfLines = 0}): React.JSX.Element => (
    <Text numberOfLines={numberOfLines} style={[TextStyles.bodyM, style]}>{text}</Text>
)

export default HBodyM;