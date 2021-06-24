import LayoutEg1 from "./layoutEg1";
import React from "react";
import Demo from "../../../../Demo";

const LayoutEg1Demo: React.FunctionComponent = () => {
    return (
        <div>
            <Demo code={require('!!raw-loader!./layoutEg1.tsx')}>
                <LayoutEg1/>
            </Demo>
        </div>
    )
}
export default LayoutEg1Demo