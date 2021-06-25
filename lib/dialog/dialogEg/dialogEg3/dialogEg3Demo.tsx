import React from 'react';
import Demo from "../../../../Demo";
import DialogEg3 from "./dialogEg3";

const DialogEg3Demo: React.FunctionComponent = () => {
    return (
        <Demo code={require('!!raw-loader!./dialogEg3.tsx')}>
            <DialogEg3/>
        </Demo>
    );
}
export default DialogEg3Demo;