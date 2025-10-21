import { useContext } from 'react';
import { makeStyles, styled } from "@mui/styles";
import { Box, Button, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { langContext } from "./context/langContext";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Welcome = ({ id, title, ref }) => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.up('xs'));
    const isSM = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box
            id={id}
            ref={ref}
            sx={{
                paddingTop: {
                    xs: 6
                }
            }}
            className={CLASSES.section}
        >
            {!isSM === true && (
                <Box sx={{ display: 'flex', justifyContent: 'center', position: 'sticky' }}>
                    <Box
                        component="img"
                        className={CLASSES.boxImg}
                        src="/img/profile.png"
                    />
                </Box>
            )}
            <div className={CLASSES.title}>
                <Typography variant={isXS ? "h2" : "h1"}>{title[0]}</Typography>
                <Typography variant={isXS ? "h2" : "h1"}>{title[1]}</Typography>
            </div>
            <div className={CLASSES.welcome}>
                <Typography variant="h6">{LANGUAGE.messages["welcome.content1"]}</Typography>
            </div>
            <div className={CLASSES.contact}>
                <Typography variant="h7">{LANGUAGE.messages["welcome.content2"]}{" "}</Typography>
                <Link className={CLASSES.link} href={`mailto:${import.meta.env.VITE_EMAIL}`}>juan@ma.dev</Link>
            </div>
            <div className={CLASSES.buttonContainer}>
                <Button
                    variant="contained"
                    sx={CLASSES.button}
                    onClick={() => open(import.meta.env.VITE_RESUME_URL, '_blank')}
                >
                    {LANGUAGE.messages["welcome.resume"]}
                </Button>
            </div>
            <div className={CLASSES.socialMediaContainer}>
                <LinkedInIcon onClick={() => open(import.meta.env.VITE_LINKEDIN_URL, '_blank')} />
                <GitHubIcon onClick={() => open(import.meta.env.VITE_GITHUB_URL, '_blank')} />
            </div>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '60px',
        '& > h1:first-child, & > h2:first-child': {
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
    },
    boxImg: {
        width: '85px',
        padding: '0px 0px 15px 0px'
    },
}));

export default Welcome;