import React, {Fragment} from 'react';
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Aside from "./Aside";
import "./layoutExam.scss"

const LayoutExample: React.FunctionComponent = () => {
    return (
        <Fragment>
            <li>
                <div>
                    <div>布局一</div>
                    <Layout>
                        <Header>
                            header
                        </Header>
                        <Content>
                            content
                        </Content>
                        <Footer>
                            footer
                        </Footer>
                    </Layout>
                </div>
            </li>
            <li>
                <div>
                    <div>布局二</div>
                    <Layout>
                        <Header>
                            header
                        </Header>
                        <Layout>
                            <Aside>aside</Aside>
                            <Content>
                                content
                            </Content>
                        </Layout>
                        <Footer>
                            footer
                        </Footer>
                    </Layout>
                </div>
            </li>
            <li>
                <div>
                    <div>布局三</div>
                    <Layout>
                        <Header>
                            header
                        </Header>
                        <Layout>
                            <Content>
                                content
                            </Content>
                            <Aside>aside</Aside>
                        </Layout>
                        <Footer>
                            footer
                        </Footer>
                    </Layout>
                </div>
            </li>
            <li>
                <div>
                    <div>布局四</div>
                    <Layout>
                        <Aside>aside</Aside>
                        <Layout>
                            <Header>
                                header
                            </Header>
                            <Content>
                                content
                            </Content>
                            <Footer>
                                footer
                            </Footer>
                        </Layout>
                    </Layout>
                </div>
            </li>
        </Fragment>
    );
};
export default LayoutExample;