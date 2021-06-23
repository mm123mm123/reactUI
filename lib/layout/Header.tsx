import React from "react";
import scopedClassMaker from "../scopedClass";

const scopedClass = scopedClassMaker('rui-layout');
const Header: React.FunctionComponent = (props) => {
    return (
        <div className={scopedClass(['header'])}>
            {props.children}
        </div>
    )
}

export default Header