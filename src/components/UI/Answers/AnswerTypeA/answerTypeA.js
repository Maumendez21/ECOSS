import React from "react";

import { Form } from "react-bootstrap";
import Aux from './../../../../hoc/Auxiliar';

import "./answerTypeA.css";

const answerTypeA = props => (
    <Aux>    
        <Form.Check
            type="radio"
            label="NUNCA"
            name="radioAnswer"
            value="0"
            onChange={props.setAnswer} />
        
        <Form.Check
            type="radio"
            label="CASI NUNCA"
            name="radioAnswer"
            value="1"
            onChange={props.setAnswer} />

        <Form.Check
            type="radio"
            label="ALGUNAS VECES"
            name="radioAnswer"
            value="2"
            onChange={props.setAnswer} />

        <Form.Check
            type="radio"
            label="CASI SIEMPRE"
            name="radioAnswer"
            value="3"
            onChange={props.setAnswer} />

        <Form.Check
            type="radio"
            label="SIEMPRE"
            name="radioAnswer"
            value="4"
            onChange={props.setAnswer} />
    </Aux>
);

export default answerTypeA;