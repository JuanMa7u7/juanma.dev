import React, { useContext } from 'react';
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-scroll';
import { FormattedMessage as FM } from 'react-intl';
import { langContext } from './context/langContext';

const Sidebar = ({ sectionsVisibility }) => {
    const LANGUAGE = useContext(langContext);

    const CLASSES = useStyles();

    const [
        welcomeIsVisible,
        aboutMeIsVisible,
        portfolioIsVisible,
        educationIsVisible,
        skillsIsVisible,
        contactIsVisible
    ] = sectionsVisibility;

    const LINKS = [
        {
            id: LANGUAGE.messages["siderbar.welcome.id"],
            label: <FM id="siderbar.welcome.label" />,
            isVisible: welcomeIsVisible ?? false
        },
        {
            id: LANGUAGE.messages["siderbar.about-me.id"],
            label: <FM id="siderbar.about-me.label" />,
            isVisible: aboutMeIsVisible ?? false
        },
        {
            id: LANGUAGE.messages["siderbar.portfolio.id"],
            label: <FM id="siderbar.portfolio.label" />,
            isVisible: portfolioIsVisible ?? false
        },
        {
            id: LANGUAGE.messages["siderbar.education.id"],
            label: <FM id="siderbar.education.label" />,
            isVisible: educationIsVisible ?? false
        },
        {
            id: LANGUAGE.messages["siderbar.skills.id"],
            label: <FM id="siderbar.skills.label" />,
            isVisible: skillsIsVisible ?? false
        },
        {
            id: LANGUAGE.messages["siderbar.contact.id"],
            label: <FM id="siderbar.contact.label" />,
            isVisible: contactIsVisible ?? false
        },
    ];

    return (
        <div className={CLASSES.sidebar}>
            <Box sx={{ width: 270 }} className={CLASSES.box} >
                <Box component="img" className={CLASSES.boxImg} src="/img/profile.png" />
                <List className={CLASSES.list}>
                    {LINKS.map(({ id, label, isVisible }, index) => (
                        <Link id={`link_${id}`} key={index} to={id} className={`${CLASSES.link} ${isVisible == true ? 'red-text' : ''}`} spy={true} activeClass="active" smooth={true} duration={500} underline="none">{label}</Link>
                    ))}
                </List>
            </Box>
        </div >
    );
}

const useStyles = makeStyles((theme) => ({
    sidebar: {
        height: '100%',
        color: 'white',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'var(--main-gray)',
        overflowX: 'hidden',
        paddingTop: '20px',
        overflowY: 'hidden',
    },
    box: {
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxImg: {
        width: '130px',
        height: 'auto',
        padding: '0px 0px 30px 0px'

    },
    list: {
        display: 'inline-block'
    },
    link: {
        display: 'block',
        padding: '10px 0px',
        cursor: 'pointer',
        textAlign: 'center',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        userSelect: 'none',
    }
}));


export default Sidebar;