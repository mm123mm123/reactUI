import React, {useState} from 'react';
import Dialog from './dialog';

const IconExample: React.FunctionComponent = () => {
    let [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}>点击按钮
            </button>
            <Dialog visible={visible} buttons={[
                <button onClick={() => setVisible(false)}>ok</button>,
                <button onClick={() => setVisible(false)}>cancel</button>]}
                    closeOnClick={() => setVisible(false)}
                    isMaskCloseOnClick={true}>
                请取款
            </Dialog>
        </div>
    );
};
export default IconExample;