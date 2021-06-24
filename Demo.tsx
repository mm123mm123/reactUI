import React, {Fragment} from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import "./demo.scss"

interface demoProp {
    code: any
}

const Demo: React.FunctionComponent<demoProp> = (props) => {
    return (
        <Fragment>
            <div>
                {props.children}
            </div>
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
        </Fragment>
    );
};
export default Demo;