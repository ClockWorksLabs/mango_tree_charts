import React from "react";
import { XAxis } from "../xAxis";

interface XAxisMeshProps {
    width: number;
    height: number;
    gap?: number;
}

export const XAxisMesh: React.FC<XAxisMeshProps> = ({ width, height, gap }) => {
    const defaultGap = height / 8;
    const actualGap = gap || defaultGap;
    const numberOfLines = Math.floor(height / actualGap);
    
    return (
        <>
            {Array.from({ length: numberOfLines }).map((_, index) => (
                <XAxis 
                    key={`x-axis-${index}`} 
                    width={width} 
                    yPosition={actualGap * index} 
                />
            ))}
        </>
    );
}; 