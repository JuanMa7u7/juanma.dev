import { useContext } from 'react';
import useElementOnScreen from './components/hooks/useElementOnScreen';
import { makeStyles } from "@mui/styles";
import { Box, Stack } from '@mui/material';
import Sidebar from "./components/SideBar.jsx";
import Welcome from "./components/Welcome.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import { FormattedMessage as FM } from 'react-intl';
import { langContext } from './components/context/langContext';

const App = () => {
  const LANGUAGE = useContext(langContext);
  const CLASSES = useStyles();
  const OBSERVER_OPTIONS = { rootMargin: '0px', threshold: 0.5 }
  const [welcomeRef, welcomeIsVisible] = useElementOnScreen(OBSERVER_OPTIONS);
  const [aboutMeRef, aboutMeIsVisible] = useElementOnScreen(OBSERVER_OPTIONS);
  const [portfolioRef, portfolioIsVisible] = useElementOnScreen(OBSERVER_OPTIONS);
  const [educationRef, educationIsVisible] = useElementOnScreen({ ...OBSERVER_OPTIONS, threshold: 0.1 });
  const [skillsRef, skillsIsVisible] = useElementOnScreen(OBSERVER_OPTIONS);
  const [contactRef, contactIsVisible] = useElementOnScreen(OBSERVER_OPTIONS);
  const sectionsVisibility = [welcomeIsVisible, aboutMeIsVisible, portfolioIsVisible, educationIsVisible, skillsIsVisible, contactIsVisible];

  return (
    <Box className={CLASSES.root}>
      <Sidebar sectionsVisibility={sectionsVisibility} />
      <Stack direction="row" spacing={1} className={CLASSES.languageMenu}>
        <div
          className={`${CLASSES.languageMenuIcons} ${LANGUAGE.getLanguage() === 'es-MX' ? 'red-text' : ''}`}
          onClick={() => LANGUAGE.setLanguage('es-MX')}
        >
          Esp
        </div>
        <div
          className={`${CLASSES.languageMenuIcons} ${LANGUAGE.getLanguage() === 'en-US' ? 'red-text' : ''}`}
          onClick={() => LANGUAGE.setLanguage('en-US')}
        >
          Eng
        </div>
      </Stack>
      <Box className={CLASSES.content}>
        <Welcome id={LANGUAGE.messages["siderbar.welcome.id"]} title={[<FM id="welcome.title1" />, <FM id="welcome.title2" />]} ref={welcomeRef} />
        <AboutMe id={LANGUAGE.messages["siderbar.about-me.id"]} title={LANGUAGE.messages["siderbar.about-me.title"]} ref={aboutMeRef} />
        <Portfolio id={LANGUAGE.messages["siderbar.portfolio.id"]} title={LANGUAGE.messages["siderbar.portfolio.title"]} ref={portfolioRef} />
        <Education id={LANGUAGE.messages["siderbar.education.id"]} title={LANGUAGE.messages["siderbar.education.title"]} ref={educationRef} />
        <Skills id={LANGUAGE.messages["siderbar.skills.id"]} title={LANGUAGE.messages["siderbar.skills.title"]} ref={skillsRef} />
        <Contact id={LANGUAGE.messages["siderbar.contact.id"]} title={LANGUAGE.messages["siderbar.contact.title"]} ref={contactRef} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'var(--main-black)',
    color: 'var(--main-white)'
  },
  content: {
    marginLeft: '310px',
  },
  languageMenu: {
    position: 'fixed',
    zIndex: 1,
    justifyContent: "flex-end",
    paddingLeft: '15px',
    paddingTop: '15px'
  },
  languageMenuIcons: {
    // width: '50px',
    height: 'auto',
    cursor: 'pointer',
    userSelect: 'none'
  }
}));

export default App;
