import React from "react";
import {Layout, Header, Content, Footer} from "../../../layout/Layout";
import Aside from "../../Aside";


const LayoutEg4: React.FunctionComponent = () => {
    return (
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
    )
}
export default LayoutEg4