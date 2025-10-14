import { useContext } from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Link, Typography } from '@mui/material';
import { langContext } from "./context/langContext";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const AboutMe = ({ id, title, ref }) => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.up('xs'));
    return (
        <Box id={id} ref={ref} className={CLASSES.section}>
            <Typography variant={isXS ? "h3" : "h2"} className={CLASSES.title}>{title}</Typography>
            <Typography variant="h6" className={CLASSES.aboutMe}>{LANGUAGE.messages["about-me.content1"]}</Typography>
            <Typography variant="h5" className={CLASSES.currently}>{LANGUAGE.messages["about-me.content2"]}</Typography>
            <Typography variant="h6" className={CLASSES.contact}>
                {LANGUAGE.messages["about-me.content3"]}
                <Link className={CLASSES.link} href="mailto:jmlafuente97@gmail.com">juan@ma.dev</Link>
            </Typography>
            <Typography variant="h6">
                {LANGUAGE.messages["about-me.content4"]}
                <Link className={CLASSES.link} href="https://www.linkedin.com/in/juan-manuel-lafuente-araiza" target="_blank">LinkedIn</Link>
            </Typography>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    section: {
        // maxWidth: '70%',
        marginRight: "40px",
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        color: 'var(--main-red)',
        paddingTop: '100px',
        paddingBottom: '60px',
    },
    aboutMe: {
        // maxWidth: '80%',
        paddingBottom: '50px',
    },
    currently: {
        color: 'var(--main-red)',
        paddingBottom: '50px',
    },
    contact: {
        paddingBottom: '50px',
    },
    link: {
        paddingLeft: '10px',
        '&:link, &:visited, &:hover, &:active': {
            color: 'var(--main-red)',
            textDecorationColor: 'var(--main-red)'
        },
    },
}));

export default AboutMe;