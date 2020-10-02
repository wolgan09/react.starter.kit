import React, { Component } from 'react'
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="toolbar-container">
                <div className="display-4 col font-weight-bold">WA</div>
            </div>
        )
    }
}

export default Header
