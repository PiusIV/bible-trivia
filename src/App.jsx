// import { useState } from "react";
import { useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Progress from "./Progress";
import Questions from "./components/Questions";
import NextQuestion from "./NextButton";
import TestamentScreen from "./components/TestamentScreen";
import oldTestament from "./data/oldTestament";
import newTestament from "./data/newTestament";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
// import { oldTestament, newTestament } from "./data/bibleQuizQuestions";

const SEC_PER_QUESTION = 20;

const initialState = {
  status: "ready",
  points: 0,
  questions: [],
  answer: null,
  index: 0,
  testament: null,
  secondsRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "chooseTestament":
      return {
        ...state,
        testament: action.payload,
        questions: action.payload === "old" ? oldTestament : newTestament,
      };
    case "toBegin":
      return { ...state, status: "ready" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SEC_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finishedQuestions":
      return { ...state, status: "finish" };
    case "restart":
      return { ...initialState, status: "ready" };
    // return { ...state, points: 0, index: 0, answer: null, status: "ready" };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finish" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    questions,
    status,
    points,
    answer,
    index,
    testament,
    secondsRemaining,
  } = state;

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <div className="grid max-w-full h-screen mx-auto place-content-center py-12 bg-zinc-900 text-white bg-cover">
      <Header />
      <Main>
        {/* {status === "ready" && <StartScreen dispatch={dispatch} />} */}
        {status === "ready" && !state.testament && (
          <TestamentScreen dispatch={dispatch} />
        )}
        {status === "ready" && state.testament && (
          <StartScreen dispatch={dispatch} testament={testament} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer secondsRemaining={secondsRemaining} dispatch={dispatch} />
              <NextQuestion
                answer={answer}
                index={index}
                numQuestions={numQuestions}
                dispatch={dispatch}
              />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
