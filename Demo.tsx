import React, {useState} from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import "./demo.scss"

interface demoProp {
    code: any
}

const Demo: React.FunctionComponent<demoProp> = (props) => {
    const [codeVisible, setCodeVisible] = useState(false)
    return (
        <div className={'COMPEg'}>
            <div className={'legendBox'}>
                {props.children}
            </div>
            {codeVisible && (
                <pre className={'codeBlock'}>
                <Highlight {...defaultProps} code={props.code.default} language="jsx">
                    {({className, style, tokens, getLineProps, getTokenProps}) => (
                        <pre className={className} style={style}>
                          {tokens.map((line, i) => (
                              <div {...getLineProps({line, key: i})}>
                                  {line.map((token, key) => (
                                      <span {...getTokenProps({token, key})} />
                                  ))}
                              </div>
                          ))}
                        </pre>
                    )}
                </Highlight>
            </pre>
            )}

            <div onClick={() => {
                setCodeVisible(!codeVisible)
            }} className={'codeDisplayBtn'}>
                <svg>
                    <use xlinkHref={!codeVisible && `#downArrow` || `#upArrow`}/>
                </svg>
                <span>{!codeVisible && `查看代码` || `隐藏代码`}</span>
            </div>
        </div>
    );
};
export default Demo;