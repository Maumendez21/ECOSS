import React from "react";

import { Form } from "react-bootstrap";
import Aux from './../../../../hoc/Auxiliar';

import "./answerTypeB.css";

const answerTypeB = props => (
    <Aux>
        <Form.Check
            type="radio"
            label="NO"
            name="radioAnswer"
            value="0"
            onChange={props.setAnswer} />
        
        <Form.Check
            type="radio"
            label="SI"
            name="radioAnswer"
            value="4"
            onChange={props.setAnswer} />
    </Aux>
);

export default answerTypeB;