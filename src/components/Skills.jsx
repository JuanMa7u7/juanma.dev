import { useContext } from 'react';
import { makeStyles } from "@mui/styles";
import { Typography, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import TechCards from './TechCards';
import { langContext } from "./context/langContext";

const Skills = ({ id, title, ref }) => {
    const LANGUAGE = useContext(langContext);
    const CLASSES = useStyles();
    const PROGRAMING_LENGUAGES = ['js', 'ts', 'php', 'c++', 'c#', 'sql'];
    const FRONTEND_TECH = ['html5', 'css3', 'react', 'nextjs', 'jquery'];
    const BACKEND_TECH = ['php', 'nodejs', 'sqlserver', 'mysql', 'graphql', 'firebase'];
    const FRAMEWORKS = ['react', 'nextjs', 'nestjs', 'jquery', 'bootstrap', 'material-ui'];
    const UTILITIES = ['vscode', 'git', 'azure', 'linux', 'docker', 'kubernetes', 'terraform', 'aws'];
    const API_INTEGRATIONS = ['gcloud']
    const DEVOPS = ['linux', 'azure']
    const iconSize = 22;
    return (
        <Box id={id} ref={ref} className={CLASSES.section}>
            <Typography variant="h2" className={CLASSES.title} >{title}</Typography>
            <Typography variant="h5">{LANGUAGE.messages["skills.content1"]}</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                {PROGRAMING_LENGUAGES.map((tech, index) => (
                    <TechCards key={index} tech={tech} size={iconSize}></TechCards>
                ))}
            </Stack>
            <Typography variant="h5">{LANGUAGE.messages["skills.content2"]}</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                {FRONTEND_TECH.map((tech, index) => (
                    <TechCards key={index} tech={tech} size={iconSize}></TechCards>
                ))}
            </Stack>
            <Typography variant="h5">{LANGUAGE.messages["skills.content3"]}</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                {BACKEND_TECH.map((tech, index) => (
                    <TechCards key={index} tech={tech} size={iconSize}></TechCards>
                ))}
            </Stack>
            <Typography variant="h5">{LANGUAGE.messages["skills.content4"]}</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                {FRAMEWORKS.map((tech, index) => (
                    <TechCards key={index} tech={tech} size={iconSize}></TechCards>
                ))}
            </Stack>
            <Typography variant="h5">{LANGUAGE.messages["skills.content5"]}</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                {UTILITIES.map((tech, index) => (
                    <TechCards key={index} tech={tech} size={iconSize}></TechCards>
                ))}
            </Stack>
            <Typography variant="h5">{LANGUAGE.messages["skills.content6"]}</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                {API_INTEGRATIONS.map((tech, index) => (
                    <TechCards key={index} tech={tech} size={iconSize}></TechCards>
                ))}
            </Stack>
            <Typography variant="h5">{LANGUAGE.messages["skills.content7"]}</Typography>
            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap', justifyContent: "flex-start", padding: '20px 0px' }}>
                {DEVOPS.map((tech, index) => (
                    <TechCards key={index} tech={tech} size={iconSize}></TechCards>
                ))}
            </Stack>
        </Box>
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
        paddingTop: '120px',
        paddingBottom: '50px',
    },
}));

export default Skills;