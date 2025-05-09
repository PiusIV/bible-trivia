import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="hover:cursor-pointer font-bold hover:shadow-2xl bg-pink-500 border-2 rounded-3xl p-3 w-22 text-center float-left">
      {mins}:{seconds}
    </div>
  );
}

export default Timer;
