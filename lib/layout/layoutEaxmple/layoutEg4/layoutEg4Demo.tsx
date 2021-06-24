import LayoutEg4 from "./layoutEg4";
import React from "react";
import Demo from "../../../../Demo";

const LayoutEg4Demo: React.FunctionComponent = () => {
    return (
        <Demo code={require('!!raw-loader!./layoutEg4.tsx')}>
            <LayoutEg4/>
        </Demo>
    )
}
export default LayoutEg4Demo