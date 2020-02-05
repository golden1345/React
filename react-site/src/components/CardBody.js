import React, { Component } from 'react'
import { CardGroup, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarked } from '@fortawesome/free-solid-svg-icons'

export default class CardBody extends Component {
    render() {
        return (
                <CardGroup>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Транспортные видеоригистраторы</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Тревожные 4G видеотерминалы <FontAwesomeIcon icon={faMapMarked} /></Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title>Видеокамеры AVC и Доп.Оборудование</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
        )
    }
}
