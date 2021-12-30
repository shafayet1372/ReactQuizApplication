import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import WrongAnswer from "../WrongAnswer";
export default function Index({ data, correctAnswer, resetHandle }) {
  const [show, setShow] = useState(false);
  //   useEffect(() => {
  //     return () => {
  //       console.log(2);
  //       setShow((p) => false);
  //     };
  //   }, []);
  return (
    <Row>
      <Col lg="12" mt="2">
        <div>
          <h4 className="text-success">
            Correct Answer:
            <small>{correctAnswer}</small>
          </h4>
          <h4 className="text-danger">
            Wrong Answer:
            <small>{data.length}</small>
          </h4>
        </div>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={() => setShow((p) => !p)}>
            {!show
              ? "click to see your wrong answer"
              : "click to hide all answer"}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              resetHandle();
            }}
          >
            Retest
          </Button>
        </div>
      </Col>
      <Col>{show && <WrongAnswer data={data} />}</Col>
    </Row>
  );
}
