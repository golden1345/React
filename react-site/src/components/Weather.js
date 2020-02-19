import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'

export default class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city &&

                    <Container>
                        <Row>
                            <p>Местоположение: {this.props.city}, {this.props.country}</p>
                        </Row>
                        <Row>
                            <p>Температура: {this.props.temp}</p>
                        </Row>
                        <Row>
                            <p>Ветер: {this.props.wind}</p>
                        </Row>
                        <Row>
                            <p>Закат: {this.props.sunset}</p>
                        </Row>
                    </Container>

                }
                <Container>
                    <Row>
            <p>{this.props.error}</p>
                    </Row>
                </Container>

            </div>
        )
    }
}
