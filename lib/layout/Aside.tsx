import React, {HTMLAttributes} from "react";
import scopedClassMaker from "../scopedClass";
interface asideProps extends HTMLAttributes<HTMLElement> {
}

const scopedClass = scopedClassMaker('rui-layout');


const Aside: React.FunctionComponent<asideProps> = (props) => {
    const {className, ...restProps} = props

    return (
        <div className={scopedClass(['aside'],className)} {...restProps}>
            {props.children}
        </div>
    )
}

export default Aside