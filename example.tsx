import React from 'react';

import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/IconExample';
import DialogExample from './lib/dialog/DialogExample';
import LayoutExample from "./lib/layout/layoutExample";
import {Layout, Header, Content, Aside, Footer} from "./lib/layout/Layout";
import './example.scss'


ReactDom.render(
    <Router>
        <Layout>
            <Header className={'webHeader'}>
                <div>
                    <img src="logo.png" className={'logo'}/>
                    <div>RUI</div>
                </div>
            </Header>
            <Layout className={'webContent'}>
                <Aside className={'webAside'}>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/layout">布局</Link>

                        </li>
                        <li>
                            <Link to="/icon">图标</Link>

                        </li>
                        <li>
                            <Link to="/dialog">提示框</Link>
                        </li>
                    </ul>
                </Aside>
                <Content className={'mainContent'}>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer className={'webFooter'}>
                &copy;mimi
            </Footer>
        </Layout>
    </Router>,
    document.querySelector('#root'));