function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let grade;
  if (percentage === 100)
    grade = "Congratulations, you're one in a million, BRAIN";
  if (percentage <= 80 && percentage < 100) grade = "A+";
  if (percentage <= 70 && percentage < 80) grade = "A";
  if (percentage <= 60 && percentage < 80) grade = "B";
  if (percentage <= 50 && percentage < 60) grade = "C";
  if (percentage <= 45 && percentage < 50) grade = "D";
  if (percentage < 45) grade = "You should be ashamed of yourself, you pagan";
  //   console.log(grade);

  return (
    <div className="grid gap-3">
      <p className="bg-blue-500 p-5 rounded-4xl">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="bg-gray-300 text-black p-5 rounded-xl w-fit font-extrabold mx-auto">
        {grade}
      </p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="hover:cursor-pointer hover:shadow-2xl bg-gray-800 border-2 rounded-4xl p-3 w-46 mx-auto"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
