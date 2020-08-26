import React from "react";
import {Button} from "antd-mobile";

export default class NotFound extends React.Component{
    render() {
        return (
            <div>
                <h2>页面走失了...</h2>
                <Button type={"primary"}
                        onClick={() => {this.props.history.replace('/')}}
                >回到首页</Button>
            </div>
        )
    }
}