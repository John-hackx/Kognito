import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "./Main_App/pages/DashboardPage";
import CoursesPage from "./Main_App/pages/CoursesPage";
import CalenderPage from "./Main_App/pages/CalenderPage";
import MessagesPage from "./Main_App/pages/MessagesPage";
import QuizHubHome from "./Quiz_Section/pages/QuizHubHome";
import PracticeTestPage from "./Main_App/pages/PracticeTestPage";
import BookmarksPage from "./Main_App/pages/BookmarksPage";
import CertificatesPage from "./Main_App/pages/CertificatesPage";
import DownloadsPage from "./Main_App/pages/DownloadsPage";
import AccountPage from "./Main_App/pages/AccountPage";
import PreferencesPage from "./Main_App/pages/PreferencesPage";
import HelpPage from "./Main_App/pages/HelpPage";
import ErrorPage from "./Main_App/pages/ErrorPage";
import QuizzesPage from "./Quiz_Section/pages/QuizzesPage";
import PracticePage from "./Quiz_Section/pages/PracticePage";
import TutorConsultPage from "./Quiz_Section/pages/TutorConsultPage";
import QuizHubDashboard from "./Quiz_Section/pages/QuizHubDashboard";
import TakeQuizPage from "./Quiz_Section/pages/TakeQuizPage";
import FinishQuiz from "./Quiz_Section/pages/FinishQuiz";
// import { useEffect, useReducer } from "react";

function App() {
  // console.log(quizzes);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="calender" element={<CalenderPage />} />
        <Route path="messages" element={<MessagesPage />} />

        <Route path="quizhub" element={<QuizHubDashboard />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<QuizHubHome />} />
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="quizzes/:id" element={<TakeQuizPage />} />
          <Route path="quizzes/takequiz/finished" element={<FinishQuiz />} />
          <Route path="practice" element={<PracticePage />} />
          <Route path="tutors" element={<TutorConsultPage />} />
        </Route>
        <Route path="practicetest" element={<PracticeTestPage />} />
        <Route path="bookmarks" element={<BookmarksPage />} />
        <Route path="certificates" element={<CertificatesPage />} />
        <Route path="downloads" element={<DownloadsPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="preferences" element={<PreferencesPage />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
