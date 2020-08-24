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
class bossInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            post: '',
            info: '',
            company: '',
            salary: ''
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
                <NavBar>老板信息完善</NavBar>
                <HeadSelector selectHead ={this.selectHead} />
                <InputItem onChange={value => this.handleChange('post', value)} placeholder={'请输入招聘职位'}>招聘职位:</InputItem>
                <InputItem onChange={value => this.handleChange('company', value)} placeholder={'请输入公司名称'}>公司名称:</InputItem>
                <InputItem onChange={value => this.handleChange('salary', value)} placeholder={'请输入职位薪资'}>职位薪资:</InputItem>
                <TextareaItem
                    onChange={value => this.handleChange('info', value)}
                    placeholder={'请输入职位要求'}
                    title={'职位要求'}
                    rows={3}
                />
                <Button type={"primary"} onClick={this.saveInfo}>保存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(bossInfo)