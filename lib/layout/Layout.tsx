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
    let classes = scopedClass([], className)
    if ((props.children as Array<ReactElement>).length) {
        (props.children as Array<ReactElement>).map((node) => {
            node.type === Aside && (classes=[classes, "hasAside"].join(' '))
        })
    }
    return (
        <div className={classes} {...restProps}>
            {props.children}
        </div>
    )
}

export default Layout