import { createContext } from 'react';

export interface CanvasDimensions {
    height: number;
    width: number;
}

export const MasterContext = createContext<CanvasDimensions>({
    height: 0,
    width: 0
}); 