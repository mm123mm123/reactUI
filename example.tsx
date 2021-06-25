import React from 'react';

import ReactDom from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import DialogExample from './lib/dialog/DialogExample';
import LayoutExample from "./lib/layout/layoutExample";
import {Layout, Header, Content, Aside, Footer} from "./lib/layout/Layout";
import './example.scss'
import IconDemo from "./lib/icon/IconDemo";
import Home from "./lib/home/Home";
import User from "./lib/user/User";

const logo = require('./logo.png')
console.log(logo);


ReactDom.render(
    <Router>
        <Layout className={'webPage'}>
            <Header className={'webHeader'}>
                <div>
                    <img src={logo.default} className={'logo'}/>
                    <div>RUI</div>
                </div>
            </Header>
            <Layout className={'webContent'}>
                <Aside className={'webAside'}>
                    <ul>
                        <li>
                            <NavLink exact to="/"><span>RUI</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/user"><span>开始使用</span></NavLink>
                        </li>
                        <li>
                            <h2>Components</h2>
                            <ul>
                                <li>
                                    <NavLink to="/layout"><span>布局</span></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/icon"><span>图标</span></NavLink>

                                </li>
                                <li>
                                    <NavLink to="/dialog"><span>提示框</span></NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </Aside>
                <Content className={'mainContent'}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/user" component={User}/>
                    <Route path="/icon" component={IconDemo}/>
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