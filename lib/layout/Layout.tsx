import React, {HTMLAttributes, ReactElement} from "react";
import scopedClassMaker from "../scpedClass";
import "./layout.scss"
import Aside from "./Aside";

interface LayoutProps extends HTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>
}

const scopedClass = scopedClassMaker('rui-layout');
const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    const {className, ...restProps} = props

    const classes =
        (
            (props.children as Array<ReactElement>).length !== 0 ?
                (props.children as Array<ReactElement>).reduce(
                    (result, node) =>
                        node.type === Aside && ([scopedClass([], className), "hasAside"].join(' ')) || result
                    , scopedClass([], className)
                ) :
                scopedClass([], className)
        );

    return (
        <div className={classes} {...restProps}>
            {props.children}
        </div>
    )
}

export default Layout