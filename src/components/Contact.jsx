import { useContext } from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Typography, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import TechCards from './TechCards';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { langContext } from "./context/langContext";

const Contact = ({ id, title, ref }) => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();
    const TECHNOLOGIES = ['html5', 'css3', 'react', 'material-ui'];
    const iconSize = 22;
    return (
        <div id={id} ref={ref} className={CLASSES.section}>
            <Typography className={CLASSES.title} variant="h3">{title}</Typography>
            <Stack direction="column" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                <Stack direction="row" spacing={2} className={CLASSES.stackContact}>
                    <EmailIcon sx={{ color: 'var(--main-red)' }}></EmailIcon>
                    <Typography variant="h7">Email</Typography>
                    <Link className={CLASSES.link} href="mailto:jmlafuente97@gmail.com">juan@ma.dev</Link>
                </Stack>
                <Stack direction="row" spacing={2} className={CLASSES.stackContact}>
                    <WhatsAppIcon sx={{ color: 'var(--main-red)' }}></WhatsAppIcon>
                    <Typography variant="h7">Whatsapp</Typography>
                    <Link className={CLASSES.link} href="https://wa.me/+524771210752" target="_blank">+52 477 121 0752</Link>
                </Stack>
                <Stack direction="row" spacing={2} className={CLASSES.stackContact}>
                    <LinkedInIcon sx={{ color: 'var(--main-red)' }}></LinkedInIcon>
                    <Typography variant="h7">LinkedIn</Typography>
                    <Link className={CLASSES.link} href="https://www.linkedin.com/in/juan-manuel-lafuente-araiza/" target="_blank">in/juanma</Link>
                </Stack>
            </Stack>
            <Typography variant="h5">{LANGUAGE.messages["contact.content1"]}:</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                {TECHNOLOGIES.map((tech, index) => (
                    <TechCards key={index} tech={tech} size={iconSize}></TechCards>
                ))}
            </Stack>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    section: {
        maxWidth: '70%',
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    title: {
        color: 'var(--main-red)',
        paddingTop: '160px',
    },
    stackContact: {
        padding: '32px 0px'
    },
    link: {
        '&:link, &:visited, &:hover, &:active': {
            color: 'var(--main-red)',
            textDecorationColor: 'var(--main-red)'
        },
    },
}));

export default Contact;