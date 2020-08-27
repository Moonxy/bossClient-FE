import React from "react";
import {connect} from 'react-redux'
import {getUserList} from '../../../.././redux/actions'

import UserList from "../../../../components/content/userList";

import '../../../.././assets/css/mainbody.css'

class Finder extends React.Component{
    componentDidMount() {
        this.props.getUserList('boss')
    }

    render() {
        return (
            <div className={'main-body'}>
                <UserList userList={this.props.userList}/>
            </div>
        )
    }
}

export default connect(
    state => ({userList: state.userList}),
    {getUserList}
)(Finder)