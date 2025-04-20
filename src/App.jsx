import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./Main_App/pages/DashboardPage";
import CoursesPage from "./Main_App/pages/CoursesPage";
import CalenderPage from "./Main_App/pages/CalenderPage";
import MessagesPage from "./Main_App/pages/MessagesPage";
import QuizHubPage from "./Main_App/pages/QuizHubPage";
import PracticeTestPage from "./Main_App/pages/PracticeTestPage";
import BookmarksPage from "./Main_App/pages/BookmarksPage";
import CertificatesPage from "./Main_App/pages/CertificatesPage";
import DownloadsPage from "./Main_App/pages/DownloadsPage";
import AccountPage from "./Main_App/pages/AccountPage";
import PreferencesPage from "./Main_App/pages/PreferencesPage";
import HelpPage from "./Main_App/pages/HelpPage";
import ErrorPage from "./Main_App/pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="calender" element={<CalenderPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="quizhub" element={<QuizHubPage />}>
          <Route index element={<div>quiz dashboard</div>} />
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
