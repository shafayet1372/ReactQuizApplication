import React from "react";
import { Button, Col } from "react-bootstrap";
import style from "./index.module.css";
export default function Index({
  prevNextController,
  prevDis,
  isSubmit,
  SubmitHandle,
  nextDis,
}) {
  return (
    <Col className={style.controller}>
      <div className="main d-flex justify-content-between">
        <div className="one">
          <Button disabled={prevDis} onClick={() => prevNextController("prev")}>
            Previous
          </Button>
        </div>
        <div className="one">
          {!isSubmit ? (
            <Button
              disabled={!nextDis}
              variant="danger"
              onClick={() => prevNextController("next")}
            >
              Next
            </Button>
          ) : (
            <Button
              disabled={!nextDis}
              variant="success"
              onClick={() => SubmitHandle("submit")}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </Col>
  );
}
