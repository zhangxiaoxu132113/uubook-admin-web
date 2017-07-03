/**
 * Created by hao.cheng on 2017/4/16.
 */
import React, {Component} from 'react';

class Page extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                {this.props.children}
            </div>
        )

    }
}

export default Page;