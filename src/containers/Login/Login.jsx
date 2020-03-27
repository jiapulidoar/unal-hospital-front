import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div id="login">
                <button onClick={() => window.location.href.replace('/dashboard')}></button>
            </div>
        )
    }
}
