import React from 'react';

interface dialogProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
    visible: boolean
}

const Dialog: React.FunctionComponent<dialogProps> = (props) => {
    return (
        props.visible ?
            <div>
                dialog
            </div>
            : null
    );
};
export default Dialog;