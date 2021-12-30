import React from "react";
import { ProgressBar, Row, Col } from "react-bootstrap";
export default function Index({ progressBarcalCulation }) {
  return (
    <Col lg="12">
      <ProgressBar
        variant="warning"
        now={progressBarcalCulation()}
        style={{ backgroundColor: "grey" }}
      />
    </Col>
  );
}
