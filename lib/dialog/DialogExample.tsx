import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from './dialog';

const IconExample: React.FunctionComponent = () => {
    let [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}>点击按钮
            </button>
            <button onClick={() => {
                alert('请取钱');
            }}>调用alert
            </button>
            <button onClick={() => {
                confirm('请取钱', () => console.log('yes'), () => console.log('no'));
            }}>调用confirm
            </button>
            <button onClick={() => {
                const onClose = modal(
                    <div>请取钱
                        <button onClick={() => {
                            onClose()
                        }}>ok</button>
                    </div>);
            }}>调用modal
            </button>
            <Dialog visible={visible} buttons={[
                <button onClick={() => setVisible(false)}>ok</button>,
                <button onClick={() => setVisible(false)}>cancel</button>]}
                    closeOnClick={() => setVisible(false)}>
                请取款
            </Dialog>
        </div>
    );
}
export default IconExample;