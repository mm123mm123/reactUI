import React from 'react';
import {confirm} from '../../dialog';

const DialogEg3: React.FunctionComponent = () => {
    return (
        <div>
            <button onClick={() => {
                confirm('自定义文本', () => console.log('yes'), () => console.log('no'));
            }}>点击调用confirm
            </button>
        </div>
    );
}
export default DialogEg3;