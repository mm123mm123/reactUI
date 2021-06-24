import React, {Fragment} from 'react';

interface demoProp {
    code: any
}

const Demo: React.FunctionComponent<demoProp> = (props) => {
    return (
        <Fragment>
            <div>
                {props.children}
            </div>
            <pre>
                {props.code.default}
            </pre>
        </Fragment>
    );
};
export default Demo;