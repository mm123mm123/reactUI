import React, {HTMLAttributes} from "react";
import scopedClassMaker from "../scopedClass";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
}

const scopedClass = scopedClassMaker('rui-layout');
const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const {className, ...restProps} = props

    return (
        <div className={scopedClass(['header'], className)} {...restProps}>
            {props.children}
        </div>
    )
}

export default Header