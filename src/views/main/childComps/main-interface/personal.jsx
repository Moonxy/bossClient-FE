import React from "react";
import {connect} from 'react-redux'

class Personal extends React.Component{
    render() {
        return (
            <div>
                personal
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Personal)