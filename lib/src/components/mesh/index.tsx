import React, { useContext } from "react";
import { MasterContext } from "../../context/MasterContext";
import { YAxisMesh } from "./YAxisMesh";
import { XAxisMesh } from "./XAxisMesh";

const Mesh = () => {
    const { height, width } = useContext(MasterContext);
    return (
        <React.Fragment>
            <YAxisMesh width={width} height={height} />
            <XAxisMesh width={width} height={height} />
        </React.Fragment>
    )
}

export {Mesh}