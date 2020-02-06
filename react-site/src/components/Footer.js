import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer mt-auto py-3 bg-light'>
    <div className='container'><FontAwesomeIcon icon={faCopyright} /> ИНФОТЕХ 1998-{(new Date().getFullYear())}</div>
            </footer>
        )
    }
}
