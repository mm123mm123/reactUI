import React, {HTMLAttributes} from "react";

interface LayoutProps extends HTMLAttributes<HTMLElement> {
}

const Layout: React.FunctionComponent = (props: LayoutProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Layout