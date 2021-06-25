import React from 'react';
import Demo from "../../../../Demo";
import DialogEg2 from "./dialogEg2";

const DialogEg2Demo: React.FunctionComponent = () => {
    return (
        <Demo code={require('!!raw-loader!./dialogEg2.tsx')}>
            <DialogEg2/>
        </Demo>
    );
}
export default DialogEg2Demo;