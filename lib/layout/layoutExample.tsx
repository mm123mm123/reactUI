import React, {Fragment} from 'react';
import "./layoutExam.scss"
import LayoutEg1Demo from "./layoutEaxmple/layoutEg1/layoutEg1Demo";
import LayoutEg2Demo from "./layoutEaxmple/layoutEg2/layoutEg2Demo";
import LayoutEg3Demo from "./layoutEaxmple/layoutEg3/layoutEg3Demo";
import LayoutEg4Demo from "./layoutEaxmple/layoutEg4/layoutEg4Demo";


const LayoutExample: React.FunctionComponent = () => {
    return (
        <Fragment>
            <div className={'layoutIntro'}>
                <h2>Layout 布局容器</h2>
                <ul className={'tagUseTip'}>
                    <li><span>{"<Layout>"}</span>：外层布局标签，包含Aside标签时，全部子元素会水平左右排列，否则会垂直上下排列</li>
                    <li><span>{"<Header>"}</span>：顶部内容区域标签</li>
                    <li><span>{"<Content>"}</span>：主要内容区域标签</li>
                    <li><span>{"<Footer>"}</span>：底部内容区域标签</li>
                    <li><span>{"<Aside>"}</span>：侧栏内容标签</li>
                </ul>
            </div>
            <ul className={'layoutEgList'}>
                <li>
                    <div>
                        <div className={'layoutTitle'}>布局一</div>
                        <LayoutEg1Demo/>
                    </div>
                </li>
                <li>
                    <div>
                        <div className={'layoutTitle'}>布局二</div>
                        <LayoutEg2Demo/>
                    </div>
                </li>
                <li>
                    <div>
                        <div className={'layoutTitle'}>布局三</div>
                        <LayoutEg3Demo/>
                    </div>
                </li>
                <li>
                    <div>
                        <div className={'layoutTitle'}>布局四</div>
                        <LayoutEg4Demo/>
                    </div>
                </li>
            </ul>

        </Fragment>
    );
};
export default LayoutExample;