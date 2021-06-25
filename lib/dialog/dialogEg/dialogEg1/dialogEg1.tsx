import React, {useState} from 'react';
import Dialog from "../../dialog";

const DialogEg1: React.FunctionComponent = () => {
    let [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}>点击打开提示框
            </button>
            <Dialog visible={visible} buttons={[
                <button onClick={() => setVisible(false)}>ok</button>,
                <button onClick={() => setVisible(false)}>cancel</button>]}
                    closeOnClick={() => setVisible(false)} isMaskCloseOnClick={true}>
                自定义文本
            </Dialog>
        </div>
    );
}
export default DialogEg1;