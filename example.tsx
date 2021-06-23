import React from 'react';

import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/IconExample';
import DialogExample from './lib/dialog/DialogExample';
import LayoutExample from "./lib/layout/layoutExample";
import {Layout,Header,Content,Aside,Footer} from "./lib/layout/Layout";
import './example.scss'


ReactDom.render(
    <Router>
        <Layout>
            <Header>
                <div>rui</div>
            </Header>
            <Layout>
                <Aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">图标</Link>
                        </li>
                        <li>
                            <Link to="/dialog">提示框</Link>
                        </li>
                        <li>
                            <Link to="/layout">布局</Link>
                        </li>
                    </ul>
                </Aside>
                <Content>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer>
                footer
            </Footer>
        </Layout>
    </Router>,
    document.querySelector('#root'));