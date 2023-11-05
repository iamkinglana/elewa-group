import MainAbout from './Components/About/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainInvest from './Components/Invest/InvestPage';
import MainSocial from './Components/social-impact/SocialImpactPage';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path="/" element={<MainAbout />} />
              <Route path="/about" element={<MainAbout />} />
              <Route path="/social-impact" element={<MainSocial />} />
              <Route path="/invest" element={<MainInvest />} />
            </Routes>
    </Router>
    </div>
  );
}

export default App;
