import { Routes, Route } from "react-router-dom";
import HomeSections from "components/home-page/HomeSections";
import Signup from "components/sign-up/Signup";
import Phone from "components/sign-up/Phone";
import FaceReg from "components/sign-up/FaceReg";
import Elections from "components/election/Elections";
import SelectedElection from "components/election/SelectedElection";
import Candidates from "components/candidates/Candidates";
import SelectedCandidate from "components/candidates/SelectedCandidate";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeSections />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/facerecognition" element={<FaceReg />} />
        <Route path="/elections" element={<Elections />} />
        <Route path="/selectedElection" element={<SelectedElection />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/selectedcandidate" element={<SelectedCandidate />} />
      </Routes>
    </div>
  );
}

export default App;
