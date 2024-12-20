import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import CustomSvgProps from "../../types/types"
import { GRAY, PRIMARY } from "../../const/colors"

const StadiumIcon = (props: CustomSvgProps) => (
  <Svg fill="none" {...props} viewBox="0 0 24 24">
    <G clipPath="url(#a)">
      <Path
        stroke={props.isActive ? PRIMARY.P120 : GRAY.G60}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.4}
        d="M20.333 9.655c0 2.2-4.253 3.985-9.5 3.985m9.5-3.985c0-2.201-4.253-3.986-9.5-3.986-5.246 0-9.5 1.785-9.5 3.986m19 0v.241l-1.65 7.063c-.296 1.42-2.05 2.536-4.686 3.027a.805.805 0 0 1-.95-.792v-1.529a.805.805 0 0 0-.805-.805H9.344a.805.805 0 0 0-.805.805v1.53c0 .51-.47.89-.97.788-2.553-.521-4.235-1.683-4.585-3.024l-1.65-7.103v-.201m9.5 3.985c-5.247 0-9.5-1.784-9.5-3.985m9.5 3.985c-3.154 0-5.71-.982-5.71-2.194s2.556-2.194 5.71-2.194c3.153 0 5.709.982 5.709 2.194s-2.556 2.194-5.71 2.194Zm-.04-11.352-1.53-.604L10.833 1v2.254m-6.039.805V1.805l-1.57.684 1.53.604m12.116.966V1.805l-1.57.684 1.53.604"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.333 0h21v21h-21z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default StadiumIcon
