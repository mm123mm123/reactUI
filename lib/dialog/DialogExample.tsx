import React from 'react';
import DialogEg1Demo from "./dialogEg/dialogEg1/dialogEg1Demo";
import DialogEg2Demo from "./dialogEg/dialogEg2/dialogEg2Demo";
import DialogEg3Demo from "./dialogEg/dialogEg3/dialogEg3Demo";
import './dialogEg.scss'

const IconExample: React.FunctionComponent = () => {
    return (
        <div className={'dialogEgBox'}>
            <h2>Dialog提示框</h2>
            <div className={'textTip'}>通过弹框对用户进行提示，通知</div>
            <h3>基本用法</h3>
            <DialogEg1Demo/>
            <h3>方法调用</h3>
            <div className={'textTip'}>
                <span className={'methodName'}>alert方法</span>
                ：接受一个参数，该参数可以定义提示内容
            </div>
            <div className={'textTip'}>
                <span className={'methodName'}>
                    confirm方法
               </span>：
                <span className={'methodTip'}>
                    接受三个参数，第一个定义提示内容，第二个定义点击按钮ok所要执行的事件，第三个定义点击按钮cancel所要执行的事件
                </span>
            </div>
            <DialogEg2Demo/>
            <DialogEg3Demo/>
        </div>
    );
}
export default IconExample;