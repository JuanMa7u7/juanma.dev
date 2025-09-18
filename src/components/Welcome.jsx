import { useContext } from 'react';
import { makeStyles, styled } from "@mui/styles";
import { Box, Button, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { langContext } from "./context/langContext";

const Welcome = ({ id, title, ref }) => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();

    return (
        <Box id={id} ref={ref} className={CLASSES.section}>
            <div className={CLASSES.title}>
                <Typography variant="h1">{title[0]}</Typography>
                <Typography variant="h1">{title[1]}</Typography>
            </div>
            <div className={CLASSES.welcome}>
                <Typography variant="h6">{LANGUAGE.messages["welcome.content1"]}</Typography>
            </div>
            <div className={CLASSES.contact}>
                <Typography variant="h7">{LANGUAGE.messages["welcome.content2"]}{" "}</Typography>
                <Link className={CLASSES.link} href="mailto:jmlafuente97@gmail.com">juan@ma.dev</Link>
            </div>
            <div className={CLASSES.buttonContainer}>
                <Button className={CLASSES.button} variant="contained" sx={CLASSES.button}>{LANGUAGE.messages["welcome.resume"]}</Button>
            </div>
            <div className={CLASSES.socialMediaContainer}>
                <LinkedInIcon onClick={() => open('https://www.linkedin.com/in/juan-manuel-lafuente-araiza')} />
                <GitHubIcon onClick={() => open('https://github.com/JuanMa7u7')} />
            </div>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    section: {
        maxWidth: '70%',
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '60px',
        '& > h1:first-child': {
            color: 'var(--main-red)',
        },
    },
    welcome: {
        paddingBottom: '50px'
    },
    contact: {
        paddingBottom: '50px'
    },
    link: {
        '&:link, &:visited, &:hover, &:active': {
            color: 'var(--main-red)',
            textDecorationColor: 'var(--main-red)'
        },
    },
    buttonContainer: {
        paddingBottom: '50px'
    },
    button: {
        // width: '180px'
    },
    socialMediaContainer: {
        display: 'inline',
        '& > svg': {
            width: '20px',
            height: 'auto',
            backgroundColor: 'var(--main-red)',
            margin: '0px 25px 0px 0px',
            borderRadius: '50%',
            border: '10px solid var(--main-red)',
            cursor: 'pointer',
        }
    }
}));

export default Welcome;