import {Text} from 'react-native';
import {TextProps} from '../../types/types';
import {TextStyles} from '../../styles/texts';

const HSubtitle: React.FC<TextProps> = ({text, style}): React.JSX.Element => (
  <Text style={[TextStyles.subtitle, style]}>{text}</Text>
);

export default HSubtitle;
