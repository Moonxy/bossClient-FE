import React from "react";
import {connect} from 'react-redux'

class Boss extends React.Component{
    render() {
        return (
            <div>
                boss
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Boss)