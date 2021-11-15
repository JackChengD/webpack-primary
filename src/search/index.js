'use strict'

import React from "react"
import ReactDOM from "react-dom"
import './index.less'
import loaderPng from "../assets/images/common-loader.png"
import '../../common';


class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        }
    }
    loadComponent() {
        import("./text.js").then((Text) => {
            this.setState({
                Text: Text.default
            })
        })
    }
    render() {
        const { Text } = this.state;
        return <div className="red">
            Search Text12
            {
                Text ? <Text/> : null
            }
            <img src={loaderPng} onClick={this.loadComponent.bind(this)} />
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)
