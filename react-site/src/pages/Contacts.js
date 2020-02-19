import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container>
                <Form onSubmit={this.props.weatherMethod}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Sity</Form.Label>
                        <Form.Control type="text" name="city" placeholder="City" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
