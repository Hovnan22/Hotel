import { Text } from "react-native";
import { TextProps } from "../../types/types";
import { TextStyles } from "../../styles/texts";


const HBodyS:  React.FC<TextProps> = ({text, style, children}): React.JSX.Element => (
    <Text style={[TextStyles.bodyS, style ]}>{text}{children}</Text>
)

export default HBodyS;