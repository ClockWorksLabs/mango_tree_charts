import React, { useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { Canvas } from "@shopify/react-native-skia";
import { GestureDetector, Gesture, GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import { MasterContext } from "../context/MasterContext";
import { Mesh } from "../components/mesh";

const PlainCanvas = () => {
    const [canvasDimentions, setCanvasDimentions] = useState({ height: 0, width: 0 });
    const scale = useSharedValue(1);

    const handleLayout = (event: LayoutChangeEvent) => {
        const dimention = event.nativeEvent.layout;
        setCanvasDimentions(dimention);
    }

    const pinchGesture = Gesture.Pinch()
        .onChange((event) => {
            scale.value = event.scale;
        })

    return (
        <GestureHandlerRootView>
            <GestureDetector gesture={pinchGesture}>
            <Canvas 
                style={{ flex: 1 }}
                onLayout={handleLayout}
            >
                <MasterContext.Provider value={{ ...canvasDimentions, scale: scale.value }}>
                    <Mesh />
                </MasterContext.Provider>
            </Canvas>
        </GestureDetector>
        </GestureHandlerRootView>
    );
}

export {PlainCanvas}