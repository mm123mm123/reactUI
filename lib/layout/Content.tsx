import React from "react";
import scopedClassMaker from "../scpedClass";
const scopedClass = scopedClassMaker('rui-layout');

const Content: React.FunctionComponent = (props) => {
    return (
        <div className={scopedClass(['content'])}>
            {props.children}
        </div>
    )
}

export default Content