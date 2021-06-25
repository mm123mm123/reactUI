import React, {Fragment} from "react";
import Demo from "../../Demo"
import IconExample from "./IconExample";
import '../importIcons';
import './iconDemo.scss'


const IconDemo: React.FunctionComponent = () => {
    const iconNameArray: Array<string> = ['clock', 'close', 'files', 'info', 'location',
        'message', 'search', 'shopCart', 'stats', 'switch', 'user', 'videoPlay']
    return (
        <Fragment>
            <div className={'iconDemoHeader'}>
                <h2>
                    Icon 图标
                </h2>
                <div>常用图标集合</div>
            </div>
            <div className={'iconDemoContent'}>
                <div className={'iconDemoContentTitle'}>标签使用方法</div>
                <div className={'iconDemoContentTip'}><span>{"<Icon>"}</span>：通过设置标签的name属性值来引用相应的图标</div>
                <Demo code={require('!!raw-loader!./IconExample.tsx')}>
                    <IconExample/>
                </Demo>
                <div className={'iconWrapperName'}>图标库</div>
                <div className={'iconWrapper'}>
                    {iconNameArray.map((iconName, index) =>
                        <div key={index}>
                            <svg>
                                <use xlinkHref={`#${iconName}`}/>
                            </svg>
                            <div>{iconName}</div>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    )
}
export default IconDemo