import React, {HTMLAttributes} from "react";
import scopedClassMaker from "../scpedClass";

interface LayoutProps extends HTMLAttributes<HTMLElement> {
}

const scopedClass = scopedClassMaker('rui-layout');
const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const {className, ...restProps} = props
    return (
        <div className={scopedClass([], className)} {...restProps}>
            {props.children}
        </div>
    )
}

export default Layout