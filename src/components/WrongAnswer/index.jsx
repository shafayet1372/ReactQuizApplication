import React from "react";
import { ListGroup } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
export default function Index({ data }) {
  //   useEffect(() => {
  //     return () => {
  //       console.log(data);
  //     };
  //   }, []);
  const dataShow = () => {
    if (!data.length) {
      return "No data....";
    }
    return data.map((x) => <SingleList data={x} key={uuidv4()} />);
  };
  return <ListGroup>{dataShow()}</ListGroup>;
}

const SingleList = ({ data }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      <div>
        <small>{data.question}</small>
      </div>
      <div>
        <strong>
          <mark className="text-danger">Y/A:</mark>
        </strong>
        <small className="text-danger">{data.userAnswer}</small>
      </div>
      <div>
        <strong>
          <mark>C/A:</mark>
        </strong>
        <small className="text-success">{data.correctAnswer}</small>
      </div>
    </ListGroup.Item>
  );
};
