import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class TestRotues extends Component {
    render() {
        console.log("test")
        return (
            <div style={{marginTop:'200px'}}>
                <NavLink to='/home'>AAAAAAAAAAAAAA</NavLink>
            </div>
        )
    }
}


export default connect()(TestRotues)
