import React from "react";
import {connect} from 'react-redux'

import '../../../.././assets/css/mainbody.css'

class Message extends React.Component{
    render() {
        return (
            <div className={'main-body'}>
                message
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Message)