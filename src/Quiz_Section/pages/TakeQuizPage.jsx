import TakeQuizMain from "../components/TakeQuizMain";
import { QuizzesContext } from "../components/QuizzesContext";
import { useContext, useEffect } from "react";
import QuizDetailsPage from "./QuizDetailsPage";
import FinishQuiz from "./FinishQuiz";

function TakeQuizPage() {
  const { state, dispatch } = useContext(QuizzesContext);
  // console.log(state);

  useEffect(
    function () {
      dispatch({ type: "new" });
    },
    [dispatch]
  );

  return (
    <>
      {state.status === "ready" && <QuizDetailsPage />}
      {state.status === "active" && <TakeQuizMain />}
      {state.status === "finished" && <FinishQuiz />}
    </>
  );
}

export default TakeQuizPage;
