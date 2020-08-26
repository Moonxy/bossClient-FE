import React from "react";
import {connect} from 'react-redux'

class Finder extends React.Component{
    render() {
        return (
            <div>
                finder
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Finder)