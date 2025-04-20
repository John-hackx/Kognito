import styles from './ProgressBar.module.css'
import clsx from 'clsx'



function ProgressBar() {
    return (
        <div className={clsx(styles.progressBarContainer)}>
            <div className={clsx(styles.progressBar)}>
                <span className={clsx(styles.emptyProgressBar)}></span>
                <span className={clsx(styles.filledProgressBar)}></span>
            </div>
            <p className={clsx(styles.progressBarText)}>79%</p>
        </div>
    )
}

export default ProgressBar
