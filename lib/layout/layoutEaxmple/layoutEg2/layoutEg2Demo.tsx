import LayoutEg2 from "./layoutEg2";
import React from "react";
import Demo from "../../../../Demo";

const LayoutEg2Demo: React.FunctionComponent = () => {
    return (
        <Demo code={require('!!raw-loader!./layoutEg2.tsx')}>
            <LayoutEg2/>
        </Demo>
    )
}
export default LayoutEg2Demo