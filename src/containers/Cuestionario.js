import React, { useEffect, useState } from "react";
import { 
    Container, 
    Row, 
    Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import CardQuestion from './../components/UI/CardQuestion/cardQuestion';
import Global from './../hoc/Global';
import Aux from './../hoc/Auxiliar';
import Axios from 'axios';

export default function Main() {

    const history = useHistory();

    const [answerType, setAnswerType] = useState(0);
    const [answer, setAnswer] = useState(100);
    const [titulo, setTitulo] = useState("");
    const [question, setQuestion] = useState({
        Avance: "",
        Categoria: "",
        Dimension: "",
        Dominio: "",
        Instrumento: "",
        Pregunta: "",
        Subtitulo: ""
    });

    const [headers, setHeaders] = useState({
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    });

    useEffect(() => {

        if (localStorage.getItem("token")) {
            getQuestion();
        } else {
            history.push("/code");
        }
        
    }, []);

    function getQuestion() {

        let data = {};

        if (answer !== 100) {
            data = {
                idTrabajador: localStorage.getItem("token"),
                primer: false,
                valor: answer
            };
        } else {
            data = {
                idTrabajador: localStorage.getItem("token"),
                primer: true
            };
        }

        Axios.post(Global.url+"instrumentos", data, headers)
            .then(function(response) {
                console.log(response);

                if (response.data.Instrumento == "I1") {
                    setTitulo("Identificación y análisis de los factores de riesgo psicosocial");
                } else if (response.data.Instrumento == "I2") {
                    setTitulo("Identificación y análisis de los factores de riesgo psicosocial y evaluación del entrorno organizacional en los centros de trabajo");
                }

                setQuestion(response.data);

                if (response.data.Pregunta !== "Sin pregunta") {

                    if (response.data.Dimension != "") {
                        setAnswerType(1);
                    } else {
                        setAnswerType(2);
                    }
                } else {
                    //Grafica
                }
            });
    }

    function sendAnswer() {
        getQuestion();
        setAnswer(100);
        setAnswerType(0);
    }

    function setAnswerHandleChange(event) {
        setAnswer(event.target.value);
    }

    return (
        <Aux>
            <Container className="mt-4 mb-4">
                <Row className="justify-content-center mb-2">
                    <Col md="7">
                        <CardQuestion 
                            titulo={titulo}
                            subtitulo={question.Subtitulo}
                            pregunta={question.Pregunta}
                            respuestas={answerType}
                            sendAnswer={ () => sendAnswer() }
                            setAnswer={setAnswerHandleChange} />
                    </Col>
                </Row>
            </Container>
        </Aux>
    );
}