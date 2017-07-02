import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';

class App extends Component {
    render() {
        return (
            <Layout className="ant-layout-has-sider">
                <HeaderCustom/>
                /*<SiderCustom/>
                <Layout>

                    <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                        {this.props.children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Admin ©2017 Created by 865470087@qq.com
                    </Footer>
                </Layout>*/
            </Layout>
        );
    }
}

export default App;