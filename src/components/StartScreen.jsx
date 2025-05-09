function StartScreen({ dispatch, testament }) {
  return (
    <div
      onClick={() => dispatch({ type: "start" })}
      className="capitalize flex flex-col text-center gap-8 "
    >
      <h1>{testament === "old" ? "Old" : "New"} Testament Quiz</h1>

      <h1 className="">
        Welcome, O Ye Brethren
        <br /> got some spare time?
      </h1>
      <h2>come on then!</h2>
      {/* <h3 className="italic font-mini">
        X questions to know how well you study the bible
      </h3> */}
      <button className="hover:cursor-pointer hover:shadow-lg hover:shadow-gray-900 bg-zinc-800 border-2 rounded-4xl p-3 w-46 mx-auto">
        let's start
      </button>
    </div>
  );
}

export default StartScreen;
