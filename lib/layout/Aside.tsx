import React from "react";
import scopedClassMaker from "../scopedClass";
const scopedClass = scopedClassMaker('rui-layout');

const Aside: React.FunctionComponent = (props) => {
    return (
        <div className={scopedClass(['aside'])}>
            {props.children}
        </div>
    )
}

export default Aside