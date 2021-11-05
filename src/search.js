'use strict'

import React from "react"
import ReactDOM from "react-dom"
import './assets/css/search.less'
import loaderPng from "./assets/images/common-loader.png"

class Search extends React.Component {
    render() {
        return <div className="red">
            Search Text12323222
            <img src={loaderPng} />
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)
