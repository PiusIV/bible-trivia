function TestamentScreen({ dispatch }) {
  return (
    <div className="flex flex-col gap-4 text-center">
      <h2>Which testament would you like to quiz on?</h2>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => dispatch({ type: "chooseTestament", payload: "old" })}
          className="bg-blue-600 p-3 rounded-lg hover:cursor-pointer"
        >
          Old Testament
        </button>
        <button
          onClick={() => dispatch({ type: "chooseTestament", payload: "new" })}
          className="bg-green-600 p-3 rounded-lg hover:cursor-pointer"
        >
          New Testament
        </button>
      </div>
    </div>
  );
}

export default TestamentScreen;
