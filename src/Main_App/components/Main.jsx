import { Link, NavLink } from "react-router-dom";
import styles from "./Main.module.css";
import clsx from "clsx";

// Data imports
import {categories} from "../../assets/data/categoryData"
import { courseProgress } from "../../assets/data/courseProgressData";
import {upcomingClasses} from "../../assets/data/upcomingClassesData";
import {recommendedCourses} from "../../assets/data/recommendedCoursesData";

// Component imports
import ProgressBar from "./ProgressBar";
import programmingImage from "../../assets/images/img 1.jpg"
import machineLearningImage from "../../assets/images/img 2.jpg"


function Main() {
  return (
    <div className={clsx(styles.main)}>
      <div className={clsx(styles.left)}>
        {categories.map((category) => (
          <SideCategory
            key={category.title}
            title={category.title}
            content={category.content}
          />
        ))}
      </div>
      <div className={clsx(styles.right)}>
        <div className={clsx(styles.welcomeHero)}>
          <div className={styles.welcomeHeader}>
            <h3>Welcome Back, Emily!</h3>
            <p>Here’s what’s happening with your learning journey today.</p>
          </div>
          <div className={styles.welcomeContent}>
            <HeroCard bgColor="#A855F7" />
            <HeroCard bgColor="#22C55E" />
            <HeroCard bgColor="#FB923C" />
            <HeroCard bgColor="#4F46E5" />
          </div>
        </div>
        <div className={clsx(styles.courseProgress)}>
          <div className={clsx(styles.courseProgressHeader)}>
            <h3>Course Progress</h3>
          </div>
          <div className={clsx(styles.courseProgressBody)}>
            {courseProgress.map((course)=> <CourseProgressCard key={course.courseName} courseName={course.courseName} instructor={course.instructor} image={course.image} progress={course.progress} lessonsCompleted={course.lessonsCompleted} lessonsTotal={course.lessonsTotal} />)}
          </div>
        </div>
        <div className={clsx(styles.upcomingClasses)}>
          <div className={clsx(styles.upcomingClassesHeader)}>
            <h3>Upcoming Classes</h3>
          </div>
          <div className={clsx(styles.upcomingClassesBody)}>
            {upcomingClasses.map((upClass) => <UpcomingClassesCard lessonTypeBgColor={upClass.lessonTypeBgColor} bgColor={upClass.bgColor} dateText={upClass.dateText} time={upClass.time} title={upClass.title} lessonType={upClass.lessonType} instructor={upClass.instructor} duration={upClass.duration} buttonText={upClass.buttonText} buttonLink={upClass.buttonLink} />)}
            {/* <UpcomingClassesCard bgColor="#4F46E5" />
            <UpcomingClassesCard bgColor="#FB923C" />
            <UpcomingClassesCard bgColor="#22C55E" />
            <UpcomingClassesCard bgColor="#A855F7" /> */}
          </div>
        </div>
        <div className={clsx(styles.bottomSection)}>
          <div className={clsx(styles.statisticsContainer)}>
            <div className={clsx(styles.statsHeader)}>
              <h4>Learning Analytics</h4>
              <div className={clsx(styles.weeklyStudy)}>
                <p className={clsx(styles.studyTimeText)}>Weekly Study Time</p>
                <span>Last 7 days</span>
              </div>
            </div>
            <div className={clsx(styles.statsGraph)}>
              {/* statistics graph goes here */}
            </div>
            <div className={clsx(styles.statsAverage)}>
              <p>Course Completion Rate</p>
              <span>Above Average</span>
            </div>
            <ProgressBar />
            <p className={clsx(styles.learningStreakText)}>Current Learning Streak</p>
            <div className={styles.daysContainer}>
              <DayCard day="M" />
              <DayCard day="T" />
              <DayCard day="W" />
              <DayCard day="T" />
              <DayCard day="F" />
              <DayCard day="S" />
              <DayCard day="S" />
              <DayCard day="S" />
              <DayCard day="S" />

            </div>
          </div>
          <div className={clsx(styles.recommendedContainer)}>
            <div className={clsx(styles.recommendedHeader)}>
              <h4>Recommended for You</h4>
            </div>
            <div className={clsx(styles.recommendedCardsContainer)}>
              {recommendedCourses.map((course) => <RecommendedCard key={course.title} image={course.image} title={course.title} rating={course.rating} description={course.description} level={course.level} duration={course.duration} />)}
              {/* <RecommendedCard image={programmingImage}/>
              <RecommendedCard image={machineLearningImage} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function RecommendedCard({image, title, rating, description, level, duration}) {
  return (
    <div className={clsx(styles.recommendedCard)}>
      <div className={clsx(styles.recommendedCardImage)}>
        <img src={image} alt="Course"/>
      </div>
      <div className={clsx(styles.recommendedCardTitle)}>
        <h4>{title}</h4>
        <span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B89230"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/></svg>
          <p>{rating}</p>
        </span>
      </div>
      <div className={clsx(styles.recommendedCardDescription)}>
        <p>{description}</p>
      </div>
      <div className={clsx(styles.recommendedCardTime)}>
        <div className={clsx(styles.time)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9196a0"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          <p>{duration}</p>
        </div>
        <div className={clsx(styles.level)}>
          <p>{level}</p>
        </div>
      </div>
      <div className={clsx(styles.recommendedCardButton)}>
        <button>Start Course</button>
      </div>
    </div>
  )
}


function DayCard({day}){
  return (
    <div className={clsx(styles.day)}><p>{day}</p></div>
  )
}


function SideCategory({ title, content }) {
  return (
    <div className={clsx(styles.sideCategory)}>
      <div className={clsx(styles.sideCategoryTitle)}>
        <p>{title}</p>
      </div>

      {content.map((item) => (
        <CategoryItem
          key={item.text}
          svg={item.svg}
          text={item.text}
          link={item.link}
        />
      ))}
    </div>
  );
}

function CategoryItem({ svg, text, link }) {
  return (
    <div className={clsx(styles.categoryItem)}>
      <NavLink to={link} className={clsx(styles.categoryItemLink)}>
        <div>{svg}</div>
        <p>{text}</p>
      </NavLink>
    </div>
  );
}

function HeroCard({bgColor}){
  const heroStyles = {backgroundColor: bgColor}
  return (
    <div style={heroStyles} className={clsx(styles.heroCard)}>

    </div>
  )
}





function CourseProgressCard({courseName, instructor, image, progress, lessonsCompleted, lessonsTotal}) {
  const progressBarStyles = {width: `${progress}%`, maximumWidth: `${progress}%`}
  return (
    <div className={clsx(styles.progressCard)}>
      <div className={styles.progressTop}>
        <div className={clsx(styles.progressTopLeft)}>
          <div className={styles.progressImage}>
            <img src={image} alt="Course" />
          </div>
        </div>
        <div className={clsx(styles.progressTopRight)}>
          <h4>{courseName}</h4>
          <p>Instructor: {instructor}</p>
          <div className={clsx(styles.progressBars)}>
            <span className={clsx(styles.emptyProgressBar)}></span>
            <span style={progressBarStyles} className={clsx(styles.filledProgressBar)}></span>
          </div>
          <p className={clsx(styles.progressText)}>{progress}%</p>
        </div>
      </div>
      <div className={styles.progressBottom}>
        <p>{lessonsCompleted} of {lessonsTotal} lessons completed</p>
        <button>Continue Learning</button>
      </div>
    </div>
  )
}


function UpcomingClassesCard({bgColor, lessonTypeBgColor, dateText, time, title, lessonType, instructor, duration, buttonText, buttonLink}) {
  const lessonTypeStyles = {backgroundColor: lessonTypeBgColor, color: bgColor}
  const upcomingStyles = {backgroundColor: bgColor}
  return (
    <div style={upcomingStyles} className={clsx(styles.upcomingClassesCard)}>
      <div className={clsx(styles.upcomingClassesSubCard)}>
        <div className={styles.classesTitle}>
          <p className={clsx(styles.classesTime)}>{dateText}, {time}</p>
          <p style={lessonTypeStyles} className={clsx(styles.classesType)}>{lessonType}</p>
        </div>
        <p className={clsx(styles.classesDuration)}>{duration}</p>
        <p className={styles.classesSubject}>{title}</p>
        <p className={clsx(styles.classesTutor)}>{instructor}</p>
        <Link to={buttonLink}>
          <button className={clsx(styles.classesJoinButton)}>{buttonText}</button>
        </Link>
      </div>
    </div>
  )
}

export default Main;
