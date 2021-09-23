import React from "react";

import { 
    Form, 
    Card, 
    Image, 
    Button } from "react-bootstrap";

import "./cardCode.css";

const cardCode = props => (
    <Card>
        <Card.Body>
            <div className="text-center mt-4 mb-4">
                <Image src="/images/ecoss-logo.png" className="w-25" fluid />
            </div>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Código</Form.Label>
                <Form.Control type="text" onChange={props.handleChangeCodigo} />
            </Form.Group>
            <div className="text-center">
                <Button variant="warning" className="btnNext" onClick={props.handleButton}>Entrar</Button>
            </div>
        </Card.Body>
    </Card>
);

export default cardCode;