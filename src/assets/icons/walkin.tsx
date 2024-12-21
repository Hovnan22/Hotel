import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Walking = (props: SvgProps) => (
  <Svg  fill="none" {...props} width={16} height={16}>
    <Path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.667 3.333h.29c2.03 0 3.047 0 3.432.365.333.316.481.78.391 1.23-.104.52-.933 1.107-2.592 2.28l-2.71 1.917c-1.658 1.173-2.487 1.76-2.591 2.28-.09.45.057.915.39 1.23C4.664 13 5.68 13 7.71 13h.623m-3-9.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm9.334 9.334a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
)
export default Walking
