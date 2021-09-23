import React from "react";

import {
    Card,
    Image,  
    Button } from "react-bootstrap";

import AnswerTypeA from './../Answers/AnswerTypeA/answerTypeA';
import AnswerTypeB from './../Answers/AnswerTypeB/answerTypeB';

import "./cardQuestion.css";

const cardQuestion = props => (
    <Card>
        <Card.Body>
            <h3 className="f700 mb-4">{ props.titulo }</h3>
            <Card.Title className="f600 mb-4">{ props.subtitulo }</Card.Title>
            <hr></hr>
            <div className="text-center mt-4 mb-4">
                <Image src="/images/ecoss-logo.png" className="w-25" fluid />
            </div>
            <h5 className="f600 mb-4">{ props.pregunta }</h5>

            { (props.respuestas === 1) ? <AnswerTypeA setAnswer={props.setAnswer} /> : '' }
            { (props.respuestas === 2) ? <AnswerTypeB setAnswer={props.setAnswer} /> : '' }

            <div className="text-right">
                <Button variant="warning" className="f700 btnNext" onClick={ props.sendAnswer }>Siguiente</Button>
            </div>
        </Card.Body>
    </Card>
);

export default cardQuestion;