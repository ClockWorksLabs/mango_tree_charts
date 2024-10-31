import { Line, vec } from "@shopify/react-native-skia";
import React from "react";

type YAxisProps = {
    xPosition: number;
    strokeWidth?: number;
    height: number;
}

const YAxis = (props: YAxisProps) => {
    const { xPosition, strokeWidth = .05, height } = props;
   
    return <Line
        p1={vec(xPosition, 0)}
        p2={vec(xPosition, height)}
        color="lightblue"
        strokeWidth={strokeWidth}
      />
}

export {YAxis}