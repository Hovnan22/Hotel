import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { CustomSvgProps } from "../../src/types/types"
import { GRAY, PRIMARY } from "../../src/const/colors"

const HomeIcon = (props: CustomSvgProps) => (

<Svg fill="none" {...props}  viewBox="0 0 24 24">
<Path
  stroke={props.isActive ? PRIMARY.P120 : GRAY.G60}
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={1.5}
  d="M7 14.875h7M9.64 2.419 3.706 7.034c-.397.309-.595.463-.738.656a1.75 1.75 0 0 0-.278.57c-.065.23-.065.482-.065.984v6.331c0 .98 0 1.47.19 1.845.169.329.436.596.766.764.374.191.864.191 1.844.191h10.15c.98 0 1.47 0 1.845-.19a1.75 1.75 0 0 0 .764-.765c.191-.375.191-.865.191-1.845v-6.33c0-.503 0-.754-.065-.986a1.75 1.75 0 0 0-.278-.569c-.143-.193-.341-.347-.738-.656L11.36 2.42c-.308-.24-.462-.36-.631-.405a.875.875 0 0 0-.458 0c-.17.046-.323.165-.63.405Z"
/>
</Svg>
)
export default HomeIcon
