import React from 'react';
import Demo from "../../../../Demo";
import DialogEg1 from "./dialogEg1";

const DialogEg1Demo: React.FunctionComponent = () => {
    return (
        <Demo code={require('!!raw-loader!./dialogEg1.tsx')}>
            <DialogEg1/>
        </Demo>
    );
}
export default DialogEg1Demo;