import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import MainContent from './components/MainContent';

require("../static/h-ui/css/H-ui.css");
require("../static/h-ui.admin/css/H-ui.admin.css");
require("../lib/Hui-iconfont/1.0.8/iconfont.css");
require("../static/h-ui.admin/skin/default/skin.css");
require("../static/h-ui.admin/css/style.css");

class App extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className="ant-layout-has-sider">
                <HeaderCustom/>
                <Layout>
                    <SiderCustom  path={this.props.location.pathname} collapsed={this.state.collapsed} />
                    <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                        <MainContent>
                            {this.props.children}
                        </MainContent>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        React-Admin ©2017 Created by 865470087@qq.com
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default App;