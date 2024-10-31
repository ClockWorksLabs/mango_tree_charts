import React, { useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { Canvas } from "@shopify/react-native-skia";
import { MasterContext } from "../context/MasterContext";
import { Mesh } from "../components/mesh";

const PlainCanvas = () => {
    const [canvasDimentions, setCanvasDimentions] = useState({ height: 0, width: 0 });

    const handleLayout = (event: LayoutChangeEvent) => {
        const dimention = event.nativeEvent.layout;
        setCanvasDimentions(dimention);
    }

    return (
        <Canvas 
            style={{ flex: 1 }}
            onLayout={handleLayout}
        >
            <MasterContext.Provider value={canvasDimentions}>
               <Mesh />
            </MasterContext.Provider>
        </Canvas>
    );
}

export {PlainCanvas}