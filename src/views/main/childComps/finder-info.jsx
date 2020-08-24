import React from "react";
import {connect} from 'react-redux'
import {
    InputItem,
    TextareaItem,
    NavBar,
    Button
}
from "antd-mobile";

import HeadSelector from "../../../components/content/head-selector";
class finderInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            post: '',
            info: ''
        }
    }

    selectHead = (header) => {
        this.setState({
            header
        })
    }

    handleChange = (stateName, value) => {
        this.setState({
            [stateName]: value
        })
    }

    saveInfo = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <NavBar>求职者信息完善</NavBar>
                <HeadSelector selectHead={this.selectHead} />
                <InputItem onChange={value => this.handleChange('post', value)} placeholder={'请输入求职岗位'}>求职岗位:</InputItem>
                <TextareaItem
                    onChange={value => this.handleChange('info', value)}
                    placeholder={'请输入个人介绍'}
                    title={'个人介绍'}
                    rows={3}
                />
                <Button onClick={this.saveInfo} type={"primary"}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(finderInfo)