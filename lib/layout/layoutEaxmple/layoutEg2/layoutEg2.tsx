import React from "react";
import {Layout, Header, Content, Footer} from "../../../layout/Layout";
import Aside from "../../Aside";


const LayoutEg2: React.FunctionComponent = () => {
    return (
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
    )
}
export default LayoutEg2