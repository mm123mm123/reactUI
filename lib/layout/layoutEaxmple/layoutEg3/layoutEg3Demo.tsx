import LayoutEg3 from "./layoutEg3";
import React from "react";
import Demo from "../../../../Demo";

const LayoutEg3Demo: React.FunctionComponent = () => {
    return (
        <Demo code={require('!!raw-loader!./layoutEg3.tsx')}>
            <LayoutEg3/>
        </Demo>
    )
}
export default LayoutEg3Demo