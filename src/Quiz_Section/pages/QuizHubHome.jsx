import QuizHubMain from "../components/QuizHubMain";
import Footer from "../../Main_App/components/Footer";
import { useContext } from "react";
import { WindowSizeContext } from "../../Main_App/components/WindowSizeContext";
import MobileFooter from "../../Main_App/components/MobileFooter";

function QuizHubDashboard() {
  const { windowWidth } = useContext(WindowSizeContext);
  const mobileView = windowWidth <= 500;

  // useEffect(
  //   function () {
  //     alert(`${windowWidth} X ${window.innerHeight}`);
  //   },
  //   [windowWidth]
  // );

  return (
    <>
      <QuizHubMain />
      {mobileView ? <MobileFooter /> : <Footer />}
    </>
  );
}

export default QuizHubDashboard;
