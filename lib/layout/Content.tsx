import React, {HTMLAttributes} from "react";
import scopedClassMaker from "../scopedClass";

const scopedClass = scopedClassMaker('rui-layout');

interface contentProps extends HTMLAttributes<HTMLElement> {
}

const Content: React.FunctionComponent<contentProps> = (props) => {
    const {className, ...restProps} = props

    return (
        <div className={scopedClass(['content'], className)}{...restProps}>
            {props.children}
        </div>
    )
}

export default Content