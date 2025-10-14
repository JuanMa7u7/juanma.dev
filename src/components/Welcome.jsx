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
                    xs: 7
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
                <Link className={CLASSES.link} href="mailto:jmlafuente97@gmail.com">juan@ma.dev</Link>
            </div>
            <div className={CLASSES.buttonContainer}>
                <Button
                    className={CLASSES.button}
                    variant="contained"
                    sx={CLASSES.button}
                    onClick={() => open('https://drive.google.com/file/d/1ZBLEdjmpc_2PH2B9_BCPPO9WMiAFD_a7', '_blank')}
                >
                    {LANGUAGE.messages["welcome.resume"]}
                </Button>
            </div>
            <div className={CLASSES.socialMediaContainer}>
                <LinkedInIcon onClick={() => open('https://www.linkedin.com/in/juan-manuel-lafuente-araiza', '_blank')} />
                <GitHubIcon onClick={() => open('https://github.com/JuanMa7u7', '_blank')} />
            </div>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    section: {
        // maxWidth: '70%',
        paddingRight: "30px",
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
    },
    boxImg: {
        width: '85px',
        // height: 'auto',
        padding: '0px 0px 15px 0px'

    },
}));

export default Welcome;