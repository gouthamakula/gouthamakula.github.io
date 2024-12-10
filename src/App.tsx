import Header from "./components/Header.tsx";
import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import WaveBackgroundEffect from 'react-water-wave';
import styled from '@emotion/styled';
import backgroundImage from './assets/background-image.png';
import ProjectsComponent from "./components/projects/Projects.tsx";
import ExperienceComponent from "./components/experience/Experience.tsx";
import HomeContainer from "./components/HomeContainer.tsx";

const WaveContainer = styled(WaveBackgroundEffect)`
  width: 100vw;
  height: 100%;
  background: url(${backgroundImage})
    no-repeat center fixed;
  background-size: cover;
`;

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  
  return (
    <Fragment>
      <CssBaseline />
      <WaveContainer
        dropRadius={30}
        resolution={1024}
      >
        {() =>
          <Router>
            < Header showHeader={showHeader} />
              <Routes>
                <Route path="/" element={<HomeContainer showHeader={setShowHeader}/>} />
                <Route path="/projects" element={<ProjectsComponent />} />
                <Route path="/experience" element={<ExperienceComponent />} />
              </Routes>
          </Router>
        }
      </WaveContainer>
    </Fragment>
  );
}

export default App
