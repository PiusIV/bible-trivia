import Option from "./Option";

function Questions({ question, dispatch, answer }) {
  return (
    <div className="max-w-[12rem] mx-auto">
      <div className="grid gap-5 mb-6 justify-center align-middle mx-auto">
        <h4 className="font-sans font-bold text-center">{question.question}</h4>
        <Option question={question} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
}

export default Questions;
