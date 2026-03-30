import { useContext } from 'react';
import useElementOnScreen from './components/hooks/useElementOnScreen';
import { makeStyles } from "@mui/styles";
import { Box, Stack } from '@mui/material';
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { FormattedMessage as FM } from 'react-intl';
import { langContext } from './components/context/langContext';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LanguageSelector from './components/LanguageSelector';

const App = () => {
  const LANGUAGE = useContext(langContext);
  const CLASSES = useStyles();
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.up('sm'));
  const smallHeight = useMediaQuery('(min-height: 460px)');
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
      <Box
        sx={{
          marginLeft: {
            xs: 3,
            sm: 21,
            md: 39
          },
          marginRight: {
            xs: 3,
          },
        }}
        className={CLASSES.content}
      >
        {(!isSM || !smallHeight) && (
          <Box sx={{ position: 'absolute', right: '0px' }}>
            <LanguageSelector />
          </Box>
        )}
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
    // marginLeft: '310px',
  },
  languageMenu: {
    width: 'fit-content',
    position: 'fixed',
    zIndex: 1,
    justifyContent: "flex-end",
    padding: '15px',
  },
  languageMenuIcons: {
    // width: '50px',
    height: 'auto',
    cursor: 'pointer',
    userSelect: 'none'
  }
}));

export default App;
