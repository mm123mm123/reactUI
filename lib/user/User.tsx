import React from "react"
import "./user.scss"

const User: React.FunctionComponent = () => {
    return (
        <div className={'usePage'}>
            <h1>
                开始使用
            </h1>
            <div className={'useTip'}>
                RUI 已发布至 NPM，您可以使用 npm / yarn 来安装。
            </div>
            <div className={'commandTip'}>
                <div>
                    npm install xue-react
                </div>
                <div>
                    yarn add xue-react
                </div>
            </div>
        </div>
    )
}
export default User