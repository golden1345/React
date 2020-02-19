import React, { Component } from 'react'
import Carousels from '../components/Carousels'
import CardBody from '../components/CardBody'
import TabsContainer from '../components/TabsContainer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousels />
                <CardBody />
                <TabsContainer />
            </div>

        )
    }
}
