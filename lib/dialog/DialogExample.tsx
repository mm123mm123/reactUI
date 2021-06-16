import React, {useState} from 'react';
import Dialog from './dialog';

const IconExample: React.FunctionComponent = () => {
    let [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {setVisible(!visible);}}>点击按钮</button>
            <Dialog visible={visible}/>
        </div>
    );
};
export default IconExample;