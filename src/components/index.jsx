import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./index.module.css";
import Progress from "./Progressbar";
import Question from "./Questions";
import ButtonController from "./ButtonController";
import { v4 as uuidv4 } from "uuid";
import { useReducer, useCallback } from "react";
import ResultView from "./ResultView";
const defaultState = {
  data: [
    {
      id: uuidv4(),
      question: "What is the capital Of Bangldesh?",
      correctAnswer: "Dhaka",
      options: ["Chittagong", "Dhaka", "Sylhet", "Rajshahi"],
      userAnswer: "",
    },
    {
      id: uuidv4(),
      question: "When Dhaka Versity was established?",
      correctAnswer: "1921",
      options: ["1945", "1921", "1939", "1911"],
      userAnswer: "",
    },
    {
      id: uuidv4(),
      question: "When is the independence of Bangladesh?",
      correctAnswer: "March 26",
      options: ["March 26", "Dec 16", "Feb 21", "Dec 14"],
      userAnswer: "",
    },
    {
      id: uuidv4(),
      question: "Which one is the national animal of Bangladesh?",
      correctAnswer: "Tiger",
      options: ["Dog", "Duck", "Cock", "Tiger"],
      userAnswer: "",
    },
  ],
  showPart: 0,
  isSubmitted: false,
  wrongAnswer: [],
  correctAnswer: 0,
};

// const initialState = {
//   data: [...JSON.parse(JSON.stringify(defaultData))],
//   showPart: 0,
//   isSubmitted: false,
//   wrongAnswer: [],
//   correctAnswer: 0,
// };
const reducer = (state, action) => {
  switch (action.type) {
    case "updateOption":
      return { ...state, data: [...action.data] };
    case "next":
      return { ...state, showPart: state.showPart + action.val };
    case "prev":
      return { ...state, showPart: state.showPart - action.val };
    case "reset":
      return {
        ...JSON.parse(JSON.stringify(defaultState)),
      };
    case "submit":
      return {
        ...state,
        isSubmitted: true,
        correctAnswer: action.correctAnswer,
        wrongAnswer: [...action.wrongAnswer],
      };
    default:
      return state;
  }
};
export default function Index() {
  const [state, disPatch] = useReducer(
    reducer,
    JSON.parse(JSON.stringify(defaultState))
  );

  const optionHandle = (id, e) => {
    let data = state.data.slice();
    let values = data.find((x) => x.id == id);
    values.userAnswer = e.target.value;

    disPatch({ type: "updateOption", data: data });
  };

  const prevNextController = (data) => {
    disPatch({ type: data, val: 1 });
  };

  const SubmitHandle = () => {
    let data = state.data.slice();
    let correctAnswer = data.filter(
      (x) => x.correctAnswer == x.userAnswer
    ).length;

    let wrongAnswer = data.filter((x) => x.correctAnswer !== x.userAnswer);

    disPatch({ type: "submit", correctAnswer, wrongAnswer });
  };

  const NextButtonDisable = () => {
    let data = state.data.slice(state.showPart, state.showPart + 1);
    return data[0].userAnswer;
  };

  const progressBarcalCulation = () => {
    return Math.floor(((state.showPart + 1) / state.data.length) * 100);
  };

  const resetHandle = () => {
    disPatch({ type: "reset" });
  };
  const showData = () => {
    let data = state.data.slice(state.showPart, state.showPart + 1);

    return (
      <Question
        data={data[0]}
        showPart={state.showPart}
        totalData={state.data.length}
        optionHandle={optionHandle}
      />
    );
  };
  return (
    <Container lg="6" className={style.mainContainer}>
      {!state.isSubmitted ? (
        <Row>
          <Progress progressBarcalCulation={progressBarcalCulation} />
          {showData()}
          <ButtonController
            prevNextController={prevNextController}
            prevDis={state.showPart == 0}
            isSubmit={state.showPart == state.data.length - 1}
            SubmitHandle={SubmitHandle}
            nextDis={NextButtonDisable()}
          />
        </Row>
      ) : (
        <ResultView
          correctAnswer={state.correctAnswer}
          data={state.wrongAnswer}
          resetHandle={resetHandle}
        />
      )}
    </Container>
  );
}
