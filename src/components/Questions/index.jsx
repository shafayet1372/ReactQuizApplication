import React from "react";
import { Col, Form, Button, Badge } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
export default function Index({ data, showPart, totalData, optionHandle }) {
  return (
    <Col lg="12">
      <div className="text-end">
        <Button variant="primary">
          {showPart + 1}|{totalData}
          <span className="visually-hidden"></span>
        </Button>
      </div>
      <div>
        <h3>
          <span style={{ color: "red", fontWeight: "bold" }}>(Q)</span>
          {data.question}
        </h3>
      </div>

      <Form>
        {data.options.map((x) => (
          <Form.Check
            key={uuidv4()}
            type="radio"
            aria-label="radio 1"
            name="option"
            value={x}
            label={x}
            checked={x == data.userAnswer}
            onChange={(e) => optionHandle(data.id, e)}
          />
        ))}
      </Form>
    </Col>
  );
}
