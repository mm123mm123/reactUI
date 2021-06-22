import React, {HTMLAttributes} from "react";

interface LayoutProps extends HTMLAttributes<HTMLElement> {
}

function scopedClassMaker(prefix: string) {
    return (...suffix: string[]) => [prefix, ...suffix].filter(Boolean).join('-');
}

const scopedClass = scopedClassMaker('rui-layout');
const Layout: React.FunctionComponent = (props: LayoutProps) => {
    const {className, ...restProps} = props
    return (
        <div className={[scopedClass(), className].filter(Boolean).join(' ')} {...restProps}>
            {props.children}
        </div>
    )
}

export default Layout