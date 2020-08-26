import React from "react";
import {connect} from 'react-redux'

class Message extends React.Component{
    render() {
        return (
            <div>
                message
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Message)