import React, {useState} from 'react';
import Dialog, {alert} from './dialog';

const IconExample: React.FunctionComponent = () => {
    let [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}>点击按钮
            </button>
            <button onClick={() => {
                alert();
            }}>调用alert
            </button>
            <Dialog visible={visible} buttons={[
                <button onClick={() => setVisible(false)}>ok</button>,
                <button onClick={() => setVisible(false)}>cancel</button>]}
                    closeOnClick={() => setVisible(false)}>
                请取款
            </Dialog>
        </div>
    );
};
export default IconExample;