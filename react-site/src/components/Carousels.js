import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import First from '../img/1.jpg'
//import Second from '../img/2.png'
//import Third from '../img/3.jpg'

export default class Carousels extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={First}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={First}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={First}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        )
    }
}
