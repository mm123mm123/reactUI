import React from "react";
import scopedClassMaker from "../scopedClass";

const scopedClass = scopedClassMaker('rui-layout');

const Footer: React.FunctionComponent = (props) => {
    return (
        <div className={scopedClass(['footer'])}>
            {props.children}
        </div>
    )
}

export default Footer