import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col } from 'react-bootstrap';
import CardCode from './../components/UI/CardCode/cardCode';
import Aux from './../hoc/Auxiliar';
import Global from './../hoc/Global';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

export default function Main() {

    const history = useHistory();
    const [codigo, setCodigo] = useState("");

    function handleChangeCodigo(event) {
        setCodigo(event.target.value);
    }

    function verifyCode() {

        const data = {
            codigo: codigo
        };

        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        };

        Axios.post(Global.url+"trabajador/codigo", data, headers)
            .then(function(response) {
                if (response.data['message'] !== "") {
                    localStorage.setItem("token", response.data['message']);
                    history.push("/cuestionario");
                }
            });
    }

    return (
        <Aux>
            <Container className="mt-4 mb-4">
                <Row className="justify-content-center mb-2">
                    <Col md="6">
                        <CardCode
                            handleChangeCodigo={handleChangeCodigo}
                            handleButton={() => verifyCode()} />
                    </Col>
                </Row>
            </Container>
        </Aux>
    );
}