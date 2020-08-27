import React from "react";
import {withRouter} from 'react-router-dom'
import {TabBar} from "antd-mobile";

const Item = TabBar.Item
class Tabbar extends React.Component{
    render() {
        let {navList} = this.props
        navList = navList.filter((item) => !item.hide)
        return(
            <TabBar>
                {
                navList.map((item, index) => (
                    <Item
                        key={item.path}
                        icon={{uri: require(`../.././assets/img/tabbar/${item.icon}.png`)}}
                        selectedIcon={{uri: require(`../.././assets/img/tabbar/${item.icon}-selected.png`)}}
                        selected={this.props.location.pathname === item.path}
                        title={item.title}
                        onPress={() => {this.props.history.replace(item.path)}}
                    />
                ))
                }
            </TabBar>
        )
    }
}

export default withRouter(Tabbar)