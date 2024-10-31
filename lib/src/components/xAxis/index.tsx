import React from "react"
import { Line, vec } from "@shopify/react-native-skia"

type XAxisProps = {
    yPosition: number;
    strokeWidth?: number;
    width: number;
}

const XAxis = (props: XAxisProps) => {
    const { yPosition, strokeWidth = .05, width } = props;
    return <Line
        p1={vec(0, yPosition)}
        p2={vec(width, yPosition)}
        color="lightblue"
        strokeWidth={strokeWidth}
        />
    }

export {XAxis}