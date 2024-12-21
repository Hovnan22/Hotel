import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const LeftArrow = (props: SvgProps) => (
  <Svg  fill="none" {...props}  width={16} height={16}>
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 7H1m0 0 6 6M1 7l6-6"
    />
  </Svg>
)
export default LeftArrow
