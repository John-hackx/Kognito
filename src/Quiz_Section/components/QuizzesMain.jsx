import styles from "./QuizzesMain.module.css";
import clsx from "clsx";
import { filters } from "../../assets/data/FiltersData";
import { RecommendedQuizCard } from "./RecommendedQuizCard";
// import { availableQuizzes } from "../../assets/data/availableQuizData";
import { useContext } from "react";
import { QuizzesContext } from "./QuizzesContext";
// import { shuffleArray } from "../../assets/reuseable functions/shuffleArray";

function QuizzesMain() {
  const { state } = useContext(QuizzesContext);

  // console.log(state);

  const quizCardCustomStyles = { height: "327px" };
  const quizCardTitleStyles = { fontSize: "18px", fontWeight: "600" };
  const quizCardImageStyles = { flex: "0.4" };

  return (
    <div className={styles.quizzesMain}>
      <div className={styles.subMain}>
        <div className={styles.subMainLeft}>
          <h3>Filters</h3>
          <p className={clsx(styles.searchTitle)}>Search</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
          <input type="text" placeholder="Search for quizzes..." />
          {filters.map((filterType) => (
            <FilterTypeBox
              key={filterType.title}
              title={filterType.title}
              filterContent={filterType.filterContent}
            />
          ))}
          {/* <FilterTypeBox /> */}
        </div>
        <div className={styles.subMainRight}>
          <h4>Available Quizzes</h4>
          <div className={styles.selectedFiltersContainer}>
            <SelectedFilter />
            <SelectedFilter />
          </div>
          <div className={styles.availableQuizContainer}>
            {state.quizzes.map((quiz, index) => (
              <RecommendedQuizCard
                quizCardImageStyles={quizCardImageStyles}
                quizCardTitleStyles={quizCardTitleStyles}
                quizCardCustomStyles={quizCardCustomStyles}
                key={index}
                quiz={quiz}
                questions={quiz.questions}
                image={quiz.image}
                title={quiz.title}
                level={quiz.level}
                time={quiz.time}
                numbOfQuestions={quiz.numbOfQuestions}
                rating={quiz.rating}
                attempts={quiz.attempts}
                id={quiz.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectedFilter() {
  return (
    <div
      style={{
        padding: "4px",
        paddingLeft: "8px",
        paddingRight: "8px",
        borderRadius: "14px",
        color: "#2855BE",
        backgroundColor: "#DBEAFE",
      }}
      className={styles.selectedFilter}
    >
      <p style={{ fontSize: "13px" }}>Mathematics</p>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </span>
    </div>
  );
}

function FilterTypeBox({ title, filterContent }) {
  // console.log(filterContent);
  return (
    <div className={styles.filterTypeBox}>
      <h4>{title}</h4>
      <div className={styles.filterList}>
        {filterContent.map((filter) => (
          <label key={filter.name}>
            <input type="checkbox" name={filter.name} value={filter.name} />
            <div className={clsx(styles.filterItemText)}>{filter.name}</div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuizzesMain;
