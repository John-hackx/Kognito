import { Outlet, useLocation, useParams } from "react-router-dom";
import styles from "./QuizHubDashboard.module.css";
import clsx from "clsx";
import Header from "../../Main_App/components/Header";
import { Link, NavLink } from "react-router-dom";
import { useReducer, useEffect } from "react";
import { QuizzesContext } from "../components/QuizzesContext";

const initialState = {
  quizzes: [],
  //loading, ready, active, finished, error
  status: "loading",
  chosenAnswers: [],
  correctAnswers: [],
  index: 0,
  score: 0,
  totalScore: null,
  selectedAnswer: null,
  secondsRemaining: null,
  timeSpent: null,
  flaggedQuestions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "received":
      return {
        ...state,
        quizzes: action.payload,
        status: "ready",
      };
    case "start":
      // console.log(action.payload.questions);
      return {
        ...state,
        status: "active",
        secondsRemaining: action.payload.questions.length * 60,
        timeSpent: 0,
        totalScore: action.payload.questions.length * 4,
      };
    case "answered":
      return {
        ...state,
        selectedAnswer: action.payload,
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        correctAnswers:
          action.payload.questions[state.index].correct_answer ===
            state.selectedAnswer &&
          !state.correctAnswers.includes(state.selectedAnswer)
            ? [...state.correctAnswers, state.selectedAnswer]
            : [...state.correctAnswers],
        selectedAnswer:
          state.chosenAnswers.length !== state.index + 1
            ? state.chosenAnswers[state.index + 1]
            : null,
        chosenAnswers:
          !state.chosenAnswers.includes(state.selectedAnswer) &&
          state.chosenAnswers.length !== state.index + 1
            ? [...state.chosenAnswers, state.selectedAnswer]
            : [...state.chosenAnswers],
      };
    case "previous":
      return {
        ...state,
        index: state.index - 1,
        selectedAnswer: state.chosenAnswers[state.index - 1],
      };
    case "new":
      return {
        ...state,
        status: "ready",
        chosenAnswers: [],
        correctAnswers: [],
        index: 0,
        selectedAnswer: null,
        secondsRemaining: null,
        timeSpent: null,
      };
    case "timerTick":
      // console.log(state.secondsRemaining);
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        timeSpent: state.timeSpent + 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    case "submitQuiz":
      return {
        ...state,
        status: "finished",
        score: state.correctAnswers.length * 4,
      };
    case "flagged":
      console.log(state.flaggedQuestions);

      return {
        ...state,
        flaggedQuestions: [...state.flaggedQuestions, action.payload],
      };
    case "unflagged":
      // console.log(state.flaggedQuestions);
      return {
        ...state,
        flaggedQuestions: state.flaggedQuestions?.filter(
          (question) => question !== action.payload
        ),
      };
    default:
      throw new Error("invalid action");
  }
};

function QuizHubDashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();
  const { id } = useParams();

  const isQuizReviewPage =
    location.pathname === `/quizhub/quizzes/${id}/quizreview`;

  useEffect(function () {
    const controller = new AbortController();
    async function fetchQuizzes() {
      try {
        const res = await fetch("http://localhost:9000/quizzes", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const availableQuizzes = data.map((quiz) => {
          return {
            ...quiz,
            levelStyles: {
              backgroundColor:
                quiz.level === "Beginner"
                  ? "#E0F7FA"
                  : quiz.level === "Intermediate"
                  ? "#FFF3E0"
                  : "#FCE4EC",
              color:
                quiz.level === "Beginner"
                  ? "#00796B"
                  : quiz.level === "Intermediate"
                  ? "#FF6F00"
                  : "#880E4F",
            },
          };
        });
        dispatch({ type: "received", payload: availableQuizzes });
        // console.log(availableQuizzes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchQuizzes();

    if (controller) return () => controller.abort();
  }, []);

  const middleChildrenStyle = { border: "none" };
  const logoStyle = { border: "none", paddingLeft: "30px" };
  return (
    <>
      {!isQuizReviewPage && (
        <Header logoStyle={logoStyle} middleChildrenStyle={middleChildrenStyle}>
          <Link to="/" className={styles.goBackLink}>
            <div className={styles.goBack}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#9196a0"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z" />
              </svg>
              <p>Back to Dashboard</p>
            </div>
          </Link>
          <div className={clsx(styles.navlinks)}>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                  to="home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                  to="quizzes"
                >
                  Quizzes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                  to="practice"
                >
                  Practice
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${styles.active}` : ""
                  }
                  to="tutors"
                >
                  Tutors
                </NavLink>
              </li>
            </ul>
          </div>
        </Header>
      )}
      <QuizzesContext.Provider value={{ state, dispatch }}>
        <Outlet />
      </QuizzesContext.Provider>
    </>
  );
}

export default QuizHubDashboard;
