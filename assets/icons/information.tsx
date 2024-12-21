import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { CustomSvgProps } from "../../src/types/types"
import { GRAY, PRIMARY } from "../../src/const/colors"

const InformationIcon = (props: CustomSvgProps) => (
  <Svg fill="none" {...props} viewBox="0 0 24 24">
    <Path
      stroke={props.isActive ? PRIMARY.P120 : GRAY.G60}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.167 14v-3.5m0-3.5h.008m8.742 3.5a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0Z"
    />
  </Svg>
)
export default InformationIcon
