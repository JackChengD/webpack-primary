'use strict'

import React from "react"
import ReactDOM from "react-dom"
import './index.less'
import loaderPng from "../assets/images/common-loader.png"
import '../../common';

class Search extends React.Component {
    render() {
        return <div className="red">
            Search Text12
            <img src={loaderPng} />
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)
