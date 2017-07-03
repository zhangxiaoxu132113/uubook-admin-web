import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';


class Dashboard extends React.Component {
    render() {
        return (
            <section className="Hui-article-box">
                <div id="Hui-tabNav" className="Hui-tabNav hidden-xs">
                    <div className="Hui-tabNav-wp">
                        <ul id="min_title_list" className="acrossTab cl">
                            <li className="active">
                                <span title="我的桌面" data-href="welcome.html">我的桌面</span>
                                <em></em>
                            </li>
                        </ul>
                    </div>
                    <div className="Hui-tabNav-more btn-group"><a id="js-tabNav-prev" className="btn radius btn-default size-S" href="javascript:;"><i className="Hui-iconfont">&#xe6d4;</i></a><a id="js-tabNav-next" className="btn radius btn-default size-S" href="javascript:;"><i className="Hui-iconfont">&#xe6d7;</i></a></div>
                </div>
                <div id="iframe_box" className="Hui-article">
                    <div className="show_iframe">
                        <div style={{display:'none'}} className="loading"></div>
                        {this.props.children}
                    </div>
                </div>
            </section>
        )
    }
}

export default Dashboard;