import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./Main_App/pages/DashboardPage";
import CoursesPage from "./Main_App/pages/CoursesPage";
import CalenderPage from "./Main_App/pages/CalenderPage";
import MessagesPage from "./Main_App/pages/MessagesPage";
import QuizHubHome from "./Quiz_Section/pages/QuizHubHome"
import PracticeTestPage from "./Main_App/pages/PracticeTestPage";
import BookmarksPage from "./Main_App/pages/BookmarksPage";
import CertificatesPage from "./Main_App/pages/CertificatesPage";
import DownloadsPage from "./Main_App/pages/DownloadsPage";
import AccountPage from "./Main_App/pages/AccountPage";
import PreferencesPage from "./Main_App/pages/PreferencesPage";
import HelpPage from "./Main_App/pages/HelpPage";
import ErrorPage from "./Main_App/pages/ErrorPage";
import QuizzesPage from "./Quiz_Section/pages/QuizzesPage"
import PracticePage from "./Quiz_Section/pages/PracticePage";
import TutorConsultPage from "./Quiz_Section/pages/TutorConsultPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="calender" element={<CalenderPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="quizhub" element={<QuizHubHome />}>
          <Route index element={<QuizHubHome />} />
          <Route path="home" element={<QuizHubHome />} />
          <Route path="quizzes" element={<QuizzesPage />} />
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
