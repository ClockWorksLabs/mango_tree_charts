import React from "react";
import { YAxis } from "../yAxis";

interface YAxisMeshProps {
    width: number;
    height: number;
    gap?: number;
}

export const YAxisMesh: React.FC<YAxisMeshProps> = ({ width, height, gap }) => {
    const defaultGap = width / 8;
    const actualGap = gap || defaultGap;
    const numberOfLines = Math.floor(width / actualGap);
    
    return (
        <>
            {Array.from({ length: numberOfLines }).map((_, index) => (
                <YAxis 
                    key={`y-axis-${index}`} 
                    height={height} 
                    xPosition={actualGap * index} 
                />
            ))}
        </>
    );
}; 