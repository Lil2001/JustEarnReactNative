import * as React from "react"
import Svg, { Path } from "react-native-svg"

export default function ArowPinkComponent(props) {
  return (
    <Svg
      width={7}
      height={5}
      viewBox="0 0 7 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.476 1.428a.458.458 0 01-.17.358l-2.75 2.213a.458.458 0 01-.582 0L.224 1.708a.459.459 0 11.587-.706L3.267 3.05l2.457-1.98a.458.458 0 01.752.358z"
        fill="#C40B83"
      />
    </Svg>
  )
}

