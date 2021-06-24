import React from "react";
import Demo from "../../Demo"
import IconExample from "./IconExample";

const IconDemo: React.FunctionComponent = () => {
    return (
        <div>
            <Demo code={require('!!raw-loader!./IconExample.tsx')}>
                <IconExample/>
            </Demo>
        </div>
    )
}
export default IconDemo