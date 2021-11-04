'use strict'

import React from "react"
import ReactDOM from "react-dom"
import './assets/css/search.less'
import loaderPng from "./assets/images/common-loader.png"

class Search extends React.Component {
    render() {
        return <div class="red">
            Search Text12
            <img src={loaderPng} />
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)
