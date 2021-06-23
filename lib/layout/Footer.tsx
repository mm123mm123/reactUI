import React, {HTMLAttributes} from "react";
import scopedClassMaker from "../scopedClass";

interface footerProps extends HTMLAttributes<HTMLElement> {
}

const scopedClass = scopedClassMaker('rui-layout');

const Footer: React.FunctionComponent<footerProps> = (props) => {
    const {className, ...restProps} = props

    return (
        <div className={scopedClass(['footer'], className)} {...restProps}>
            {props.children}
        </div>
    )
}

export default Footer