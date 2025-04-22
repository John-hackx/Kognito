import {quizAnalytics} from '../../assets/data/QuizAnalyticsData'
import {QuizInProgress} from "../../assets/data/QuizzesInProgressData"

import CourseProgressCard from "../../Main_App/components/CourseProgressCard"
import styles from './QuizHubMain.module.css'
import heroImage from "../../assets/images/img 7.jpg"
import clsx from 'clsx'

function QuizHubMain() {
    const topRightStyles = {paddingLeft: '10px', border: '0px solid red'}
    const barStyles = {width: '84%'}
    const progressTextStyles = {marginTop: '14px'}
    const lessonsCompleteStyles = {width: '100%', border: '0px solid red'}
    return (
        <div className={styles.main}>
            <div className={styles.subMainTop}>
                <div className={styles.right}>
                    <div className={styles.hero}>
                        <div className={styles.heroLeft}>
                            <h3 className={clsx(styles.heroHeader)}>Welcome Back, Emily!</h3>
                            <p className={clsx(styles.heroText)}>Continue your learning journey and improve your skills.</p>
                            <div className={styles.heroCardsContainer}>
                                {quizAnalytics.map((item)=> <HeroCard key={item.title} title={item.title} value={item.value} svg={item.svg} iconBgColor={item.iconBgColor}/>)}
                                {/* <HeroCard />
                                <HeroCard />
                                <HeroCard /> */}
                            </div>
                            <button className={clsx(styles.heroButton)}>Continue Learning</button>
                        </div>
                        <div className={styles.heroRight}>
                            <img src={heroImage} alt="Hero" />
                        </div>
                    </div>
                    <div className={styles.quizInProgress}>
                        <h3>Quizzes in Progress</h3>
                        <div className={styles.quizInProgressCardContainer}>
                            {QuizInProgress.map((item)=> <CourseProgressCard key={item.courseName} level={item.level} topRightPtext="level" BtnText="Resume" lessonsCompleteStyles={lessonsCompleteStyles} progressTextStyles={progressTextStyles} barStyles={barStyles} topRightStyles={topRightStyles} courseName={item.courseName} instructor={item.level} progress={item.progress} image={item.image} lessonsCompleted={item.lessonsCompleted} lessonsTotal={item.lessonsTotal}>{item.lessonsCompleted} of {item.lessonsTotal} questions answered</CourseProgressCard>)}
                        </div>
                    </div>
                </div>
                <div className={styles.left}>
                    <div className={styles.progress}></div>
                    <div className={styles.weeklyPerformance}></div>
                </div>
            </div>

            <div className={styles.subMainMiddle}></div>
        </div>
    )
}


function HeroCard({title, value, svg, iconBgColor}){
    return (
        <div className={styles.heroCard}>
            <div className={styles.heroCardLeft}>
                <div style={{backgroundColor: iconBgColor}} className={styles.svgContainer}>
                    {svg}
                </div>
            </div>
            <div className={styles.heroCardRight}>
                <p>{title}</p>
                <h4>{value}</h4>
            </div>
        </div>
    )
}






export default QuizHubMain
