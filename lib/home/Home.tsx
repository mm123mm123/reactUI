import React from "react";
import "./home.scss"

const Home: React.FunctionComponent = () => {
    return (
        <div className={'homePage'}>
            <ul>
                <li>
                    <h1>RUI</h1>
                    <div>RUI 是一个React 组件库，色彩、样式的设计参考了其他成熟组件库。</div>
                </li>
                <li>
                    <h1>使用TypeScript</h1>
                    <div>TypeScript提供了静态类型检查，让开发人员可以在代码运行之前识别某些类型问题。RUI 完全使用 TypeScript 编写，使得框架更加严谨健壮。
                    </div>
                </li>
                <li>
                    <h1>没有额外依赖</h1>
                    <div>RUI只依赖 React、ReactDOM 两个核心库以及 PropTypes 进行类型检查，没有其他外部依赖。
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Home