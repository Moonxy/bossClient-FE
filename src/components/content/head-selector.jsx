import React from "react";
import {List, Grid} from "antd-mobile";
import '../../assets/css/headImg.css'

export default class headSelector extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            headImg: [],
            icon: null
        }
    }

    componentDidMount() {
        /*获取头像*/
        let headImg = []
        for(let i = 1; i<=20; i++){
            headImg.push({
                text: `头像${i}`,
                icon: require(`../.././assets/img/headSelector/头像${i}.jpg`)
            })
        }
        this.setState({
            headImg
        })
    }

    gridClick = (obj) => {
        this.setState({
            icon: obj.icon
        })
        this.props.selectHead(obj.text)
    }

    render() {
        const renderHeader = !this.state.icon ?
            (
                <div>
                    <span>请选择头像</span>
                </div>
            ):
            (
                <div>
                    <div style={{float: 'left', marginTop: '15px', paddingRight: '10px'}}>
                        <span>已选择头像:</span>
                    </div>
                    <div>
                        <img style={{width: '40px', height: '40px'}} src={this.state.icon} />
                    </div>
                </div>
            )
        return(
            <div>
                <List renderHeader={() => renderHeader}>
                    <Grid
                        onClick={this.gridClick}
                        className={'grid'}
                        data={this.state.headImg}
                        columnNum={5}
                        itemStyle={{height: '80px', width: '80px'}}
                    >
                    </Grid>
                </List>
            </div>
        )
    }
}