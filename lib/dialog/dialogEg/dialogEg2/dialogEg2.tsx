import React from 'react';
import {alert} from '../../dialog';

const DialogEg2: React.FunctionComponent = () => {
    return (
        <div>
            <button onClick={() => {
                alert('自定义文本');
            }}>点击调用alert
            </button>
        </div>
    );
}
export default DialogEg2;