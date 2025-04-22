import clsx from "clsx"
import Header from "../../Main_App/components/Header"
import styles from './QuizHubHome.module.css'
import { Link, NavLink } from "react-router-dom"
import QuizHubMain from "../components/QuizHubMain"

function QuizHubDashboard() {
    const middleChildrenStyle = {border: 'none'}
    const logoStyle = {border: 'none', paddingLeft: '30px'}
    return (
        <>
            <Header logoStyle={logoStyle} middleChildrenStyle={middleChildrenStyle} >
                    <Link to="/" className={styles.goBackLink}>
                <div className={styles.goBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#9196a0"><path d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z"/></svg>
                        <p>Back to Dashboard</p>
                </div>
                    </Link>
                <div className={clsx(styles.navlinks)}>
                    <ul>
                        <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ""} to="home">Home</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ""} to="quizzes">Quizzes</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ""} to="practice">Practice</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ""} to="tutors">Tutors</NavLink></li>
                    </ul>
                </div>
            </Header>
            <QuizHubMain />
        </>
    )
}

export default QuizHubDashboard
