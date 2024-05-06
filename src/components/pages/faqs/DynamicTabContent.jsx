import React from "react";
import { Accordion } from "react-bootstrap";
import "./style.scss";

const DynamicTabContent = ({ data }) => {
  return (
    <Accordion defaultActiveKey="0">
      {data.map((d, index) => (
        <Accordion.Item eventKey={`${index}`} key={index}>
          <Accordion.Header>{d.question}</Accordion.Header>
          <Accordion.Body>{d.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default DynamicTabContent;
