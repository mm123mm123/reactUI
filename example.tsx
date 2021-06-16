import React from 'react';

import ReactDom from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/IconExample';
import DialogExample from './lib/dialog/DialogExample';


ReactDom.render(
    <Router>
        <div>
            <header>
                <div>rui</div>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">图标</Link>
                        </li>
                        <li>
                            <Link to="/dialog">提示框</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/dialog" component={DialogExample}/>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector('#root'));