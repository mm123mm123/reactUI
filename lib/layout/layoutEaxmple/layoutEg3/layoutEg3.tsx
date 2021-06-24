import React from "react";
import {Layout, Header, Content, Footer} from "../../../layout/Layout";
import Aside from "../../Aside";


const LayoutEg3: React.FunctionComponent = () => {
    return (
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
    )
}
export default LayoutEg3