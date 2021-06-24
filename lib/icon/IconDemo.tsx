import React from "react";
import Demo from "../../Demo"
import IconExample from "./IconExample";

const IconDemo: React.FunctionComponent = () => {
    console.log(typeof require('!!raw-loader!./IconExample.tsx'));
    return (
        <div>
            <Demo code={require('!!raw-loader!./IconExample.tsx')}>
                <IconExample/>
            </Demo>
        </div>
    )
}
export default IconDemo