import React from 'react';
import Layout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const LayoutExample: React.FunctionComponent = () => {
    return (
        <div>
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
    );
};
export default LayoutExample;