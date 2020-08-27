import React from "react";
import {Card, WingBlank, WhiteSpace} from "antd-mobile";

const Header = Card.Header
const Body = Card.Body

export default class UserList extends React.Component{
    render() {
        return(
            <WingBlank style={{marginBottom: '50px'}}>
                {this.props.userList.map((user, index) => {
                    return (
                        <div key={user._id}>
                            <div>
                                <WhiteSpace/>
                                <Card>
                                    <Header
                                        thumb={require(`../.././assets/img/headSelector/${user.header}.jpg`)}
                                        extra={user.username}
                                        thumbStyle={{width: '50px'}}
                                    />
                                    <Body>
                                        <div>职位:{user.post}</div>
                                        {user.company ? <div>公司:{user.company}</div> : null}
                                        {user.salary ? <div>月薪:{user.salary}</div> : null}
                                        <div>描述:{user.info}</div>
                                    </Body>
                                </Card>
                            </div>
                        </div>
                    )
                })}
            </WingBlank>
        )
    }
}