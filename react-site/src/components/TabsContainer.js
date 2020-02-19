import React, { Component } from 'react'
import { Container, Tab, Nav, Col, Row } from 'react-bootstrap'

export default class TabsContainer extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">ROW</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">ROW2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <p>KJSFAhhlashfskdjhkshdkfjhskdfh</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

            </Container>
        )
    }
}
